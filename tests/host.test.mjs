import test from 'node:test';
import assert from 'node:assert/strict';

import { apply, assistantText, findAssistantMessage, __test } from '../index.js';

const { ROUTE_PATH, MAX_TEXT_CHARS, handleMessageRequest } = __test;

function createHost(sessionQuery) {
  const routes = [];
  const effects = [];
  const ctx = {
    connection: {
      fetch: {
        register(route) {
          routes.push(route);
          return async () => {};
        },
      },
    },
    effect(callback, label) {
      effects.push(label);
      return callback();
    },
    get(name) {
      return name === 'sessionQuery' ? sessionQuery : undefined;
    },
  };
  apply(ctx);
  return { ctx, routes, effects };
}

function post(payload) {
  return new Request('http://127.0.0.1:3080' + ROUTE_PATH, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: typeof payload === 'string' ? payload : JSON.stringify(payload),
  });
}

function assistantMessage(id, content, source = { kind: 'model', provider: 'deepseek', model: 'deepseek-chat' }) {
  return {
    type: 'assistant/message',
    seq: 7,
    time: 1761973200000,
    data: { turn: 1, step: 1, message: { id, content, source }, stream: [] },
  };
}

function queryFor(events, extras = {}) {
  return {
    observeSession: async () => ({
      header: { id: 'session-1' },
      events,
      [Symbol.dispose]() {},
    }),
    readTitle: async () => ({ title: '需求讨论', eventSeq: 3, updatedAt: 1, messageSeqs: [], source: { kind: 'user' } }),
    ...extras,
  };
}

test('host apply registers the authenticated message route once', () => {
  const { routes, effects } = createHost(undefined);
  assert.equal(routes.length, 1);
  assert.equal(routes[0].path, '/api/deepseek-web-chat.message');
  assert.deepEqual(routes[0].methods, ['POST']);
  assert.equal(routes[0].requestBody, 'buffered');
  assert.equal(typeof routes[0].fetch, 'function');
  assert.deepEqual(effects, ['deepseek-web-chat: assistant message route']);
});

test('host route returns only visible text blocks of the addressed message', async () => {
  const events = [
    assistantMessage('m1', [
      { type: 'reasoning', text: '内部推理不应出现' },
      { type: 'text', text: '结论：可以。' },
      { type: 'tool-call', id: 'call-1', name: 'bash', arguments: '{}' },
      { type: 'text', text: '验证步骤见下。' },
    ]),
  ];
  const { routes } = createHost(queryFor(events));
  const response = await routes[0].fetch(post({ sessionId: 'session-1', messageId: 'm1' }));
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.ok, true);
  assert.equal(body.text, '结论：可以。\n\n验证步骤见下。');
  assert.equal(body.truncated, false);
  assert.equal(body.chars, body.text.length);
  assert.equal(body.title, '需求讨论');
  assert.equal(body.model, 'deepseek-chat');
  assert.equal(body.provider, 'deepseek');
  assert.equal(body.time, 1761973200000);
});

test('host route truncates long replies and reports the full length', async () => {
  const long = 'x'.repeat(MAX_TEXT_CHARS + 50);
  const { routes } = createHost(queryFor([assistantMessage('m1', [{ type: 'text', text: long }])]));
  const body = await (await routes[0].fetch(post({ sessionId: 's', messageId: 'm1' }))).json();
  assert.equal(body.truncated, true);
  assert.equal(body.chars, long.length);
  assert.equal(body.text.length, MAX_TEXT_CHARS);
});

test('host route answers stable codes for missing and empty messages', async () => {
  const { routes } = createHost(queryFor([assistantMessage('m1', [{ type: 'text', text: 'hi' }])]));
  const missing = await routes[0].fetch(post({ sessionId: 's', messageId: 'other' }));
  assert.equal(missing.status, 404);
  assert.equal((await missing.json()).error, 'message-not-found');

  const { routes: emptyRoutes } = createHost(
    queryFor([assistantMessage('m2', [{ type: 'tool-call', id: 'c', name: 'read', arguments: '{}' }])]),
  );
  const emptyResponse = await emptyRoutes[0].fetch(post({ sessionId: 's', messageId: 'm2' }));
  assert.equal(emptyResponse.status, 404);
  assert.equal((await emptyResponse.json()).error, 'message-empty');
});

test('host route maps a missing session and a query failure to distinct statuses', async () => {
  const missingSession = {
    observeSession: async () => {
      const error = new Error('no such session');
      error.code = 'SESSION_QUERY_SESSION_NOT_FOUND';
      throw error;
    },
  };
  const { routes } = createHost(missingSession);
  const notFound = await routes[0].fetch(post({ sessionId: 's', messageId: 'm' }));
  assert.equal(notFound.status, 404);
  assert.equal((await notFound.json()).error, 'session-not-found');

  const broken = {
    observeSession: async () => {
      throw new Error('disk on fire');
    },
  };
  const { routes: brokenRoutes } = createHost(broken);
  const failed = await brokenRoutes[0].fetch(post({ sessionId: 's', messageId: 'm' }));
  assert.equal(failed.status, 503);
  assert.equal((await failed.json()).error, 'query-failed');
});

test('host route falls back to a persisted snapshot when the live observation fails', async () => {
  const events = [assistantMessage('m1', [{ type: 'text', text: 'archived reply' }])];
  const query = {
    observeSession: async () => {
      throw new Error('not live');
    },
    readSession: async () => ({ session: { id: 's' }, events }),
  };
  const { routes } = createHost(query);
  const response = await routes[0].fetch(post({ sessionId: 's', messageId: 'm1' }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).text, 'archived reply');
});

test('host route stays loaded without sessionQuery and rejects malformed requests', async () => {
  const { routes } = createHost(undefined);
  const unsupported = await routes[0].fetch(post({ sessionId: 's', messageId: 'm' }));
  assert.equal(unsupported.status, 503);
  assert.equal((await unsupported.json()).error, 'unsupported');

  for (const payload of ['not json', '[]', '{}', { sessionId: 'has space', messageId: 'm' }, { sessionId: 's' }]) {
    const response = await routes[0].fetch(post(payload));
    assert.equal(response.status, 400, 'rejects ' + String(typeof payload === 'string' ? payload : JSON.stringify(payload)));
    assert.equal((await response.json()).error, 'invalid-request');
  }
});

test('host route disposes the observation after reading', async () => {
  let disposed = 0;
  const events = [assistantMessage('m1', [{ type: 'text', text: 'ok' }])];
  const query = {
    observeSession: async () => ({
      header: { id: 's' },
      events,
      [Symbol.dispose]() {
        disposed += 1;
      },
    }),
  };
  const { routes } = createHost(query);
  await routes[0].fetch(post({ sessionId: 's', messageId: 'm1' }));
  assert.equal(disposed, 1);
});

test('findAssistantMessage prefers the newest duplicate and assistantText skips non-text blocks', () => {
  const events = [
    assistantMessage('m1', [{ type: 'text', text: 'old' }]),
    { type: 'user/message', seq: 8, time: 1, data: {} },
    assistantMessage('m1', [{ type: 'text', text: 'new' }]),
  ];
  const found = findAssistantMessage(events, 'm1');
  assert.equal(assistantText(found.message), 'new');
  assert.equal(findAssistantMessage([], 'm1'), null);

  assert.equal(
    assistantText({
      content: [
        { type: 'text', text: '  a  ' },
        { type: 'reasoning', text: 'r' },
        { type: 'text', text: '' },
        { type: 'text', text: 'b' },
      ],
    }),
    'a\n\nb',
  );
});

test('handleMessageRequest reads the request body defensively', async () => {
  const response = await handleMessageRequest(
    { get: () => undefined },
    new Request('http://127.0.0.1:3080' + ROUTE_PATH, { method: 'POST', body: '' }),
  );
  assert.equal(response.status, 400);
});
