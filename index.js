/**
 * Host half of the DeepSeek Web Chat bundle.
 *
 * The Client half owns the embedded browser window. This half owns the one
 * piece of Harness data the window cannot read: the exact text of a finalized
 * assistant message, addressed by Session id and message id. The Client asks
 * over an authenticated `connection.fetch` route; the answer is derived from
 * `sessionQuery` and shaped here, so the browser never folds the session log.
 */

/** Authenticated route the Client half posts to. */
const ROUTE_PATH = '/api/deepseek-web-chat.message';
/** Longest message body accepted from the Client. */
const MAX_REQUEST_BYTES = 4096;
/** Longest excerpt returned to the DeepSeek composer. */
const MAX_TEXT_CHARS = 12000;
/** Longest identifier accepted from the Client. */
const MAX_ID_CHARS = 200;
/** Upper bound on one observation, so a stuck session cannot pin the route. */
const QUERY_TIMEOUT_MS = 8000;

/** Hard dependency: without the browser carrier there is no route to answer. */
export const inject = ['connection'];

/**
 * Register the package's authenticated message route.
 * @param ctx - Host plugin context.
 */
export function apply(ctx) {
  ctx.effect(
    () =>
      ctx.connection.fetch.register({
        path: ROUTE_PATH,
        methods: ['POST'],
        requestBody: 'buffered',
        fetch: (request) => handleMessageRequest(ctx, request),
      }),
    'deepseek-web-chat: assistant message route',
  );
}

/**
 * Answer one review read.
 * @param ctx - Host plugin context; `sessionQuery` is looked up lazily so a
 * profile without the query service keeps the plugin loaded.
 * @param request - buffered POST request carrying `{ sessionId, messageId }`.
 * @returns a JSON response; failures carry a stable `error` code.
 */
async function handleMessageRequest(ctx, request) {
  const body = await readJsonBody(request);
  if (body === null) return failure(400, 'invalid-request');
  const { sessionId, messageId } = body;
  if (!isId(sessionId) || !isId(messageId)) return failure(400, 'invalid-request');

  const query = ctx.get('sessionQuery');
  if (query === undefined || query === null || typeof query.observeSession !== 'function') {
    return failure(503, 'unsupported');
  }

  const signal = querySignal(request.signal);
  let events;
  try {
    events = await readEvents(query, sessionId, signal);
  } catch (error) {
    if (isAbort(error)) return failure(504, 'timeout');
    const code = errorCode(error);
    if (code.endsWith('NOT_FOUND') || code === 'ENOENT') return failure(404, 'session-not-found');
    return failure(503, 'query-failed');
  }

  if (!Array.isArray(events)) return failure(503, 'query-failed');
  const found = findAssistantMessage(events, messageId);
  if (found === null) return failure(404, 'message-not-found');
  const text = assistantText(found.message);
  if (text === '') return failure(404, 'message-empty');

  const truncated = text.length > MAX_TEXT_CHARS;
  const excerpt = truncated ? text.slice(0, MAX_TEXT_CHARS) : text;
  const source = found.message.source !== null && typeof found.message.source === 'object' ? found.message.source : {};
  const payload = {
    ok: true,
    messageId,
    text: excerpt,
    truncated,
    chars: text.length,
    time: Number.isFinite(found.event.time) ? found.event.time : null,
    title: (await readTitle(query, sessionId, signal)).replace(/\s+/g, ' '),
    model: typeof source.model === 'string' ? source.model.slice(0, 120) : '',
    provider: typeof source.provider === 'string' ? source.provider.slice(0, 120) : '',
  };
  return Response.json(payload, { headers: { 'cache-control': 'no-store' } });
}

/**
 * Parse the request body as one small JSON object.
 * @param request - buffered request.
 * @returns the parsed object, or null when the body is missing, too large or malformed.
 */
async function readJsonBody(request) {
  try {
    const declared = Number(request.headers.get('content-length'));
    if (Number.isFinite(declared) && declared > MAX_REQUEST_BYTES) return null;
    const raw = await request.text();
    if (raw.length === 0 || raw.length > MAX_REQUEST_BYTES) return null;
    const parsed = JSON.parse(raw);
    if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
    return parsed;
  } catch (error) {
    return null;
  }
}

/**
 * @param value - candidate Session or message id from the Client.
 * @returns whether it is a bounded, control-free identifier.
 */
function isId(value) {
  return (
    typeof value === 'string' &&
    value.length > 0 &&
    value.length <= MAX_ID_CHARS &&
    !/[\s\u0000-\u001f\u007f]/.test(value)
  );
}

/**
 * Combine the caller's cancellation with the route's own timeout.
 * @param callerSignal - the request's abort signal.
 * @returns one signal, or undefined when neither facility exists.
 */
function querySignal(callerSignal) {
  try {
    const timeout = typeof AbortSignal.timeout === 'function' ? AbortSignal.timeout(QUERY_TIMEOUT_MS) : undefined;
    if (callerSignal === undefined || callerSignal === null) return timeout;
    if (timeout === undefined) return callerSignal;
    return typeof AbortSignal.any === 'function' ? AbortSignal.any([callerSignal, timeout]) : timeout;
  } catch (error) {
    return undefined;
  }
}

/** @returns whether the failure was a cancellation rather than a query failure. */
function isAbort(error) {
  return error !== null && typeof error === 'object' && (error.name === 'AbortError' || error.name === 'TimeoutError');
}

/** @returns the stable error code carried by a query failure, if any. */
function errorCode(error) {
  return error !== null && typeof error === 'object' && typeof error.code === 'string' ? error.code : '';
}

/**
 * Release an observation lease without trusting one particular disposal shape.
 * @param observation - the lease returned by `observeSession`.
 */
function disposeObservation(observation) {
  if (observation === null || typeof observation !== 'object') return;
  try {
    if (typeof observation[Symbol.dispose] === 'function') {
      observation[Symbol.dispose]();
      return;
    }
  } catch (error) {
    /* Best effort: a leaked lease still reports its own failure at the source. */
  }
  try {
    if (typeof observation.dispose === 'function') observation.dispose();
  } catch (error) {
    /* Best effort. */
  }
}

/**
 * Read one session's raw events, falling back to a persisted snapshot when the
 * live observation is unavailable (an archived or idle session).
 * @param query - the sessionQuery service.
 * @param sessionId - target Session.
 * @param signal - combined cancellation.
 * @returns the raw event array, or a non-array value when the source had none.
 */
async function readEvents(query, sessionId, signal) {
  try {
    const observation = await query.observeSession(sessionId, {
      projectionMode: 'none',
      ...(signal === undefined ? {} : { signal }),
    });
    try {
      return observation !== null && typeof observation === 'object' ? observation.events : undefined;
    } finally {
      disposeObservation(observation);
    }
  } catch (error) {
    if (typeof query.readSession !== 'function') throw error;
    const snapshot = await query.readSession(sessionId);
    return snapshot !== null && typeof snapshot === 'object' ? snapshot.events : undefined;
  }
}

/**
 * Find the newest assistant message event with this id.
 * @param events - raw log events from one observation.
 * @param messageId - durable message id surfaced by the Chat row.
 * @returns the event and its message, or null.
 */
export function findAssistantMessage(events, messageId) {
  if (!Array.isArray(events)) return null;
  for (let index = events.length - 1; index >= 0; index -= 1) {
    const event = events[index];
    if (event === null || typeof event !== 'object' || event.type !== 'assistant/message') continue;
    const message = event.data !== null && typeof event.data === 'object' ? event.data.message : undefined;
    if (message !== null && typeof message === 'object' && message.id === messageId) return { event, message };
  }
  return null;
}

/**
 * Flatten only the visible text blocks of one assistant message. Reasoning and
 * tool-call blocks stay out of the review prompt.
 * @param message - assistant message with content blocks.
 * @returns the joined visible text, trimmed per block.
 */
export function assistantText(message) {
  const content = message !== null && typeof message === 'object' && Array.isArray(message.content) ? message.content : [];
  const parts = [];
  for (const block of content) {
    if (block === null || typeof block !== 'object' || block.type !== 'text' || typeof block.text !== 'string') continue;
    const text = block.text.trim();
    if (text !== '') parts.push(text);
  }
  return parts.join('\n\n');
}

/**
 * Fold the session title, tolerating a query service without the optional read.
 * @returns the title, or an empty string.
 */
async function readTitle(query, sessionId, signal) {
  if (typeof query.readTitle !== 'function') return '';
  try {
    const snapshot = await query.readTitle(sessionId, signal);
    return snapshot !== null && typeof snapshot === 'object' && typeof snapshot.title === 'string'
      ? snapshot.title.slice(0, 200)
      : '';
  } catch (error) {
    return '';
  }
}

/**
 * Build one JSON failure response.
 * @param status - HTTP status the Client maps onto a user-facing code.
 * @param error - stable machine code.
 */
function failure(status, error) {
  return Response.json({ ok: false, error }, { status, headers: { 'cache-control': 'no-store' } });
}

export const __test = { ROUTE_PATH, MAX_TEXT_CHARS, handleMessageRequest, readJsonBody, isId };
