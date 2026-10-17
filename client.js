window.__ModuleLoader__.load({
  id: '@local/dsh-deepseek-web-chat',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const PANEL_ID = 'deepseek-web-chat';
    const NS = 'deepseek-web-chat';
    const TARGET = 'https://chat.deepseek.com/';
    const WORKSPACE_KEY = 'dsh-deepseek-web-chat';
    const WHALE_PATH = 'M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9.22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 21.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.7207 35.7358 8.42822 33.5601 6.81348 30.584C5.25342 27.7197 4.34766 24.6479 4.19775 21.3677C4.1582 20.5757 4.38672 20.2959 5.15869 20.1519C6.17529 19.96 7.22314 19.9199 8.23926 20.0718C12.5327 20.7119 16.1885 22.6719 19.2529 25.7759C21.002 27.5439 22.3252 29.6558 23.6885 31.7202C25.1377 33.9121 26.6978 36 28.6831 37.7119C29.3843 38.312 29.9434 38.7681 30.479 39.104C28.8643 39.2881 26.1699 39.3281 24.3262 37.8398ZM26.3433 24.6001C26.3433 24.248 26.6191 23.9678 26.9658 23.9678C27.0444 23.9678 27.1152 23.9839 27.1782 24.0078C27.2651 24.04 27.3438 24.0879 27.4067 24.1602C27.5171 24.272 27.5801 24.4321 27.5801 24.6001C27.5801 24.9521 27.3042 25.2319 26.9575 25.2319C26.6108 25.2319 26.3433 24.9521 26.3433 24.6001ZM32.6064 27.8799C32.2046 28.0479 31.8027 28.1919 31.4165 28.208C30.8179 28.2397 30.1641 27.9922 29.8096 27.688C29.2583 27.2158 28.8643 26.9521 28.6987 26.1279C28.6279 25.7759 28.6675 25.2319 28.7305 24.9199C28.8721 24.248 28.7144 23.8159 28.2495 23.4238C27.8716 23.104 27.3911 23.0161 26.8633 23.0161C26.666 23.0161 26.4849 22.9277 26.3511 22.856C26.1304 22.7441 25.9492 22.4639 26.1226 22.1201C26.1777 22.0078 26.4458 21.7358 26.5088 21.688C27.2256 21.272 28.0527 21.4077 28.8169 21.7197C29.5259 22.0161 30.0615 22.5601 30.834 23.3281C31.6216 24.2559 31.7632 24.5117 32.2124 25.208C32.5669 25.752 32.8901 26.312 33.1104 26.9521C33.2446 27.3521 33.0713 27.6802 32.6064 27.8799Z';

    const zh = {
      panel: 'DeepSeek 聊天',
      'web.title': 'DeepSeek 网页聊天',
      'window.label': 'DeepSeek 网页聊天面板',
      back: '返回对话',
      loading: '正在加载 DeepSeek…',
      'loading.hint': '首次使用请在此页面登录 DeepSeek 账号。',
      'error.title': '无法加载 DeepSeek 网页',
      'error.body': '请检查网络连接后重试。',
      'error.detail': '错误信息：{detail}',
      'error.startTimeout': '内嵌浏览器启动超时，请重试。',
      'error.loadTimeout': '网页加载超时，请检查网络后重试。',
      'unsupported.title': '当前环境不支持内嵌网页',
      'unsupported.body': '请在 DeepSeek Harness 桌面应用中使用，或在浏览器中打开 DeepSeek 网页聊天。',
      retry: '重试',
      openExternal: '在浏览器中打开',
      reload: '刷新',
      handoff: '接力',
      'handoff.title': '把这段对话带到 Harness',
      'handoff.menu.all': '整段对话',
      'handoff.menu.last': '最后一条回复',
      'handoff.menu.round': '当前一轮问答',
      'handoff.menu.selection': '选中片段',
      'handoff.busy': '正在读取 DeepSeek 对话…',
      'handoff.done': '已插入当前对话（{count} 条）',
      'handoff.doneWithTruncation': '已插入当前对话，但对话较长，可能不完整',
      'handoff.copied': '已复制到剪贴板，请返回对话后粘贴',
      'handoff.confirm.title': '内容较长，确认插入？',
      'handoff.confirm.body': '共 {count} 个字符，会占用较多上下文。',
      'handoff.confirm.ok': '仍然插入',
      'handoff.cancel': '取消',
      'handoff.error.noMessages': '没有读到对话内容',
      'handoff.error.noSelection': '没有选中文字',
      'handoff.error.timeout': '读取超时，请重试',
      'handoff.error.unsupported': '当前环境无法读取网页内容',
      'handoff.error.noSession': '请先在 Harness 打开一个对话',
      'handoff.error.noComposer': '找不到 Harness 输入框',
      'handoff.error.failed': '插入失败',
      'handoff.error.notReady': '页面还没加载好，请稍等',
      'handoff.role.user': '我',
      'handoff.role.assistant': 'DeepSeek',
      'handoff.header': '【需求交接 · 来自 DeepSeek 网页聊天】',
      'handoff.meta': '时间：{time}　范围：{scope}',
      'handoff.truncatedNote': '注：对话较长，可能未完整抓取。',
      'handoff.recordHeading': '## 对话记录',
      'handoff.selectionHeading': '## 选中片段',
    };

    const en = {
      panel: 'DeepSeek Chat',
      'web.title': 'DeepSeek Web Chat',
      'window.label': 'DeepSeek Web Chat panel',
      back: 'Back to conversation',
      loading: 'Loading DeepSeek…',
      'loading.hint': 'Sign in to DeepSeek here the first time.',
      'error.title': "Couldn't load DeepSeek",
      'error.body': 'Check your connection and try again.',
      'error.detail': 'Error: {detail}',
      'error.startTimeout': 'The embedded browser did not start. Try again.',
      'error.loadTimeout': 'The page took too long to load. Check your connection and try again.',
      'unsupported.title': 'Embedded pages are not available here',
      'unsupported.body': 'Use the DeepSeek Harness desktop app, or open DeepSeek Web Chat in your browser.',
      retry: 'Retry',
      openExternal: 'Open in browser',
      reload: 'Reload',
      handoff: 'Hand off',
      'handoff.title': 'Bring this conversation into Harness',
      'handoff.menu.all': 'Whole conversation',
      'handoff.menu.last': 'Last reply',
      'handoff.menu.round': 'Current round',
      'handoff.menu.selection': 'Selected text',
      'handoff.busy': 'Reading the DeepSeek conversation…',
      'handoff.done': 'Added to the current conversation ({count} messages)',
      'handoff.doneWithTruncation': 'Added, but the conversation was long and may be incomplete',
      'handoff.copied': 'Copied. Paste it into the conversation.',
      'handoff.confirm.title': 'Insert a long transcript?',
      'handoff.confirm.body': '{count} characters will use a lot of context.',
      'handoff.confirm.ok': 'Insert anyway',
      'handoff.cancel': 'Cancel',
      'handoff.error.noMessages': 'No conversation was found',
      'handoff.error.noSelection': 'No text is selected',
      'handoff.error.timeout': 'Reading timed out. Try again.',
      'handoff.error.unsupported': 'This environment cannot read the page',
      'handoff.error.noSession': 'Open a Harness conversation first',
      'handoff.error.noComposer': 'The Harness composer is unavailable',
      'handoff.error.failed': 'Insertion failed',
      'handoff.error.notReady': 'The page is still loading',
      'handoff.role.user': 'Me',
      'handoff.role.assistant': 'DeepSeek',
      'handoff.header': '[Handoff from DeepSeek Web Chat]',
      'handoff.meta': 'Time: {time} · Scope: {scope}',
      'handoff.truncatedNote': 'Note: the conversation was long and may be incomplete.',
      'handoff.recordHeading': '## Conversation',
      'handoff.selectionHeading': '## Selected text',
    };

    const CSS = `
.dsh-dsc-root { position: fixed; inset: 0; pointer-events: none; }
.dsh-dsc-panel {
  position: fixed;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  background: var(--dsw-alias-bg-base);
  pointer-events: auto;
}
.dsh-dsc-bar {
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  height: calc(44px + var(--dsh-frame-top-clearance, 0px));
  padding: var(--dsh-frame-top-clearance, 0px) 8px 0 10px;
  border-bottom: 0.5px solid var(--dsw-alias-border-l3);
  background: var(--dsw-alias-bg-base);
  user-select: none;
}
.dsh-dsc-brand {
  width: 18px;
  height: 18px;
  flex: none;
  display: inline-flex;
}
.dsh-dsc-title {
  min-width: 0;
  overflow: hidden;
  color: var(--dsw-alias-label-primary);
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dsh-dsc-spacer { flex: 1 1 auto; }
.dsh-dsc-action {
  width: 28px;
  height: 28px;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
}
.dsh-dsc-action:hover {
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-interactive-bg-hover);
}
.dsh-dsc-action:focus-visible {
  outline: 2px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
  outline-offset: 1px;
}
.dsh-dsc-body {
  position: relative;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  background: var(--dsw-alias-bg-base);
}
.dsh-dsc-host {
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  display: flex;
}
.dsh-dsc-webview {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  display: flex;
  border: 0;
  background: var(--dsw-alias-bg-base);
}
.dsh-dsc-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 94%, transparent);
}
.dsh-dsc-card {
  width: min(420px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}
.dsh-dsc-glyph {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  border-radius: 12px;
  color: var(--dsw-alias-state-business-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary) 12%, transparent);
}
.dsh-dsc-spinner {
  width: 26px;
  height: 26px;
  margin-bottom: 6px;
  border: 2.5px solid color-mix(in srgb, var(--dsw-alias-state-business-primary) 22%, transparent);
  border-top-color: var(--dsw-alias-state-business-primary);
  border-radius: 50%;
  animation: dsh-dsc-spin 0.8s linear infinite;
}
@keyframes dsh-dsc-spin { to { transform: rotate(360deg); } }
.dsh-dsc-heading {
  margin: 0;
  color: var(--dsw-alias-label-primary);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
}
.dsh-dsc-text {
  margin: 0;
  color: var(--dsw-alias-label-tertiary);
  font-size: 13px;
  line-height: 1.6;
}
.dsh-dsc-detail {
  max-width: 100%;
  margin: 0;
  overflow-wrap: anywhere;
  color: var(--dsw-alias-label-caption, var(--dsw-alias-label-tertiary));
  font-size: 11px;
  line-height: 1.5;
}
.dsh-dsc-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}
.dsh-dsc-button {
  height: 32px;
  padding: 0 14px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.dsh-dsc-button:hover { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-dsc-button:focus-visible {
  outline: 2px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
  outline-offset: 1px;
}
.dsh-dsc-handoff {
  position: relative;
  flex: none;
  display: inline-flex;
  align-items: center;
}
.dsh-dsc-handoff-main {
  height: 28px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 0 9px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
}
.dsh-dsc-handoff-main:hover:not(:disabled) {
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-interactive-bg-hover);
}
.dsh-dsc-handoff-main:disabled { opacity: 0.6; cursor: default; }
.dsh-dsc-handoff-main:focus-visible,
.dsh-dsc-handoff-caret:focus-visible {
  outline: 2px solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
  outline-offset: 1px;
}
.dsh-dsc-handoff-caret {
  width: 18px;
  height: 28px;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  cursor: pointer;
}
.dsh-dsc-handoff-caret:hover:not(:disabled) {
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-interactive-bg-hover);
}
.dsh-dsc-handoff-caret:disabled { opacity: 0.45; cursor: default; }
.dsh-dsc-handoff-spinner {
  width: 12px;
  height: 12px;
  flex: none;
  border: 1.6px solid color-mix(in srgb, var(--dsw-alias-state-business-primary) 24%, transparent);
  border-top-color: var(--dsw-alias-state-business-primary);
  border-radius: 50%;
  animation: dsh-dsc-spin 0.8s linear infinite;
}
.dsh-dsc-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 30;
  min-width: 188px;
  padding: 4px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
}
.dsh-dsc-menu-item {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 12.5px;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
}
.dsh-dsc-menu-item:hover { background: var(--dsw-alias-interactive-bg-hover); }
.dsh-dsc-menu-check {
  width: 14px;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-state-business-primary);
}
.dsh-dsc-toast {
  position: absolute;
  left: 50%;
  bottom: 20px;
  z-index: 40;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: min(560px, calc(100% - 32px));
  padding: 8px 10px 8px 14px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: 10px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font-size: 12.5px;
  line-height: 1.45;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
.dsh-dsc-toast-text { min-width: 0; }
.dsh-dsc-toast button {
  height: 26px;
  flex: none;
  padding: 0 9px;
  border: 0;
  border-radius: 6px;
  background: var(--dsw-alias-interactive-bg-hover);
  color: inherit;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.dsh-dsc-modal {
  position: absolute;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: color-mix(in srgb, var(--dsw-alias-bg-base) 55%, transparent);
}
.dsh-dsc-modal-card {
  width: min(380px, 100%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-alias-bg-layer-1);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.22);
}
.dsh-dsc-seat {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  background: var(--dsw-alias-bg-base);
}
`;

    let panelRect = null;
    const rectListeners = new Set();

    function rectsEqual(left, right) {
      return (
        left !== null &&
        right !== null &&
        left.left === right.left &&
        left.top === right.top &&
        left.width === right.width &&
        left.height === right.height
      );
    }

    function setPanelRect(next) {
      if (rectsEqual(panelRect, next)) return;
      panelRect = next;
      for (const listener of [...rectListeners]) {
        try {
          listener();
        } catch (error) {
          console.error('DeepSeek chat: rect listener failed', error);
        }
      }
    }

    function subscribePanelRect(listener) {
      rectListeners.add(listener);
      return () => {
        rectListeners.delete(listener);
      };
    }

    function getPanelRect() {
      return panelRect;
    }

    function usePanelRect() {
      return React.useSyncExternalStore(subscribePanelRect, getPanelRect, getPanelRect);
    }

    function ChatGlyph({ size = 18 }) {
      return h(
        'svg',
        {
          width: size,
          height: size,
          viewBox: '0 0 50 50',
          fill: 'none',
          'aria-hidden': true,
          focusable: false,
        },
        h('path', {
          d: WHALE_PATH,
          fill: '#4D6BFE',
          fillRule: 'nonzero',
        }),
      );
    }

    function BackGlyph({ size = 16 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true, focusable: false },
        h('path', {
          d: 'M19 12H5M11 18l-6-6 6-6',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      );
    }

    function ReloadGlyph({ size = 15 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true, focusable: false },
        h('path', {
          d: 'M20 11a8 8 0 0 0-14.6-4M4 4v4h4M4 13a8 8 0 0 0 14.6 4M20 20v-4h-4',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      );
    }

    function ExternalGlyph({ size = 15 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true, focusable: false },
        h('path', {
          d: 'M14 4h6v6M20 4l-9 9M18.5 13.5V19a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H10',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      );
    }

    function HandoffGlyph({ size = 14 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true, focusable: false },
        h('path', {
          d: 'M4 12h11M11 6l6 6-6 6',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      );
    }

    function ChevronDownGlyph({ size = 12 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true, focusable: false },
        h('path', {
          d: 'm6 9 6 6 6-6',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      );
    }

    function CheckGlyph({ size = 13 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true, focusable: false },
        h('path', {
          d: 'm5 12.5 4.5 4.5L19 7',
          stroke: 'currentColor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      );
    }

    function WarningGlyph({ size = 22 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true, focusable: false },
        h('path', {
          d: 'M12 3.8 21 20H3L12 3.8Z',
          stroke: 'currentColor',
          strokeWidth: 1.7,
          strokeLinejoin: 'round',
        }),
        h('path', { d: 'M12 9v5', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' }),
        h('circle', { cx: 12, cy: 17, r: 1.1, fill: 'currentColor' }),
      );
    }

    function IconButton({ label, onClick, children }) {
      return h(
        'button',
        {
          type: 'button',
          className: 'dsh-dsc-action',
          title: label,
          'aria-label': label,
          onClick,
        },
        children,
      );
    }

    const HANDOFF_LIMIT = 20000;
    const HANDOFF_MODES = ['all', 'last', 'round', 'selection'];

    async function extractInGuest(mode) {
      const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const ITEM = '[data-virtual-list-item-key]';
      const ASSISTANT = '.ds-assistant-message-main-content';
      const THINK = '.ds-think-content';
      const BLOCKS = new Set([
        'P', 'DIV', 'SECTION', 'ARTICLE', 'HEADER', 'FOOTER', 'UL', 'OL', 'LI',
        'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'PRE', 'TABLE', 'TR', 'HR',
      ]);
      const clean = (value) =>
        String(value || '')
          .replace(/\u00a0/g, ' ')
          .replace(/[ \t]+\n/g, '\n')
          .replace(/\n{3,}/g, '\n\n')
          .trim();
      const textOf = (node) => {
        if (node === null || node === undefined) return '';
        if (node.nodeType === 3) return node.nodeValue || '';
        if (node.nodeType !== 1) return '';
        const el = node;
        const tag = el.tagName;
        if (tag === 'BUTTON' || tag === 'SVG' || tag === 'STYLE' || tag === 'SCRIPT' || tag === 'NOSCRIPT') return '';
        const className = el.getAttribute('class') || '';
        if (
          className.indexOf('md-code-block-banner') !== -1 ||
          className.indexOf('md-code-block-action') !== -1 ||
          className.indexOf('md-code-block-footer') !== -1 ||
          className.indexOf('ds-markdown-code-copy-button') !== -1
        ) {
          return '';
        }
        if (el.getAttribute('aria-hidden') === 'true') return '';
        if (tag === 'BR') return '\n';
        if (tag === 'PRE') {
          const code = el.querySelector('code') || el;
          const className = code.getAttribute('class') || '';
          const match = className.match(/language-([\w+#.-]+)/);
          const body = String(code.innerText || code.textContent || '').replace(/\n+$/, '');
          return '\n```' + (match ? match[1] : '') + '\n' + body + '\n```\n';
        }
        let out = '';
        for (const child of el.childNodes) out += textOf(child);
        if (tag === 'LI') return '\n- ' + out.trim() + '\n';
        if (tag === 'TD' || tag === 'TH') return ' ' + out.trim() + ' |';
        if (BLOCKS.has(tag)) return '\n' + out + '\n';
        return out;
      };
      const readItem = (el) => {
        const assistant = el.querySelector(ASSISTANT) || null;
        if (assistant === null && (el.querySelector(THINK) || null) !== null) return null;
        const text = clean(textOf(assistant || el));
        if (text === '') return null;
        return { role: assistant === null ? 'user' : 'assistant', text };
      };
      if (mode === 'selection') {
        const selection = window.getSelection ? window.getSelection() : null;
        const selected = clean(selection ? selection.toString() : '');
        if (selected === '') return { ok: false, reason: 'no-selection' };
        return { ok: true, messages: [{ role: 'selection', text: selected }], truncated: false, total: 1 };
      }
      const first = document.querySelector(ITEM);
      if (first === null) return { ok: false, reason: 'no-messages' };
      let scroller = first.parentElement;
      while (scroller !== null && scroller !== document.body) {
        const style = getComputedStyle(scroller);
        if (/(auto|scroll)/.test(style.overflowY) && scroller.scrollHeight > scroller.clientHeight + 8) break;
        scroller = scroller.parentElement;
      }
      if (scroller === null || scroller === document.body) {
        scroller = document.scrollingElement || document.documentElement;
      }
      const messages = [];
      const indexByKey = new Map();
      let truncated = false;
      const capture = () => {
        for (const el of document.querySelectorAll(ITEM)) {
          const key = el.getAttribute('data-virtual-list-item-key') || '';
          const item = readItem(el);
          if (item === null) continue;
          if (key !== '' && indexByKey.has(key)) {
            messages[indexByKey.get(key)] = item;
            continue;
          }
          if (key !== '') indexByKey.set(key, messages.length);
          messages.push(item);
        }
      };
      const original = scroller.scrollTop;
      try {
        let lastHeight = -1;
        for (let settle = 0; settle < 6; settle += 1) {
          scroller.scrollTop = 0;
          await nextFrame();
          await sleep(120);
          capture();
          const height = scroller.scrollHeight;
          if (height === lastHeight) break;
          lastHeight = height;
        }
        let lastTop = -1;
        for (let step = 0; step < 140; step += 1) {
          const max = scroller.scrollHeight - scroller.clientHeight;
          if (scroller.scrollTop >= max - 2) break;
          const delta = Math.max(220, Math.floor(scroller.clientHeight * 0.8));
          scroller.scrollTop = Math.min(max, scroller.scrollTop + delta);
          await nextFrame();
          await sleep(60);
          capture();
          if (scroller.scrollTop === lastTop) break;
          lastTop = scroller.scrollTop;
          if (step === 139) truncated = true;
        }
        await sleep(40);
        capture();
      } finally {
        try {
          scroller.scrollTop = original;
        } catch (error) {
          /* Best effort: the page may have re-rendered while collecting. */
        }
      }
      if (messages.length === 0) return { ok: false, reason: 'no-messages' };
      return { ok: true, messages, truncated, total: messages.length };
    }

    function selectHandoffMessages(messages, mode) {
      if (mode === 'last') {
        for (let index = messages.length - 1; index >= 0; index -= 1) {
          if (messages[index].role === 'assistant') return [messages[index]];
        }
        return messages.slice(-1);
      }
      if (mode === 'round') {
        for (let index = messages.length - 1; index >= 0; index -= 1) {
          if (messages[index].role === 'user') return messages.slice(index);
        }
        return messages.slice(-1);
      }
      return messages;
    }

    function formatStamp(date) {
      const pad = (value) => String(value).padStart(2, '0');
      return (
        date.getFullYear() +
        '-' +
        pad(date.getMonth() + 1) +
        '-' +
        pad(date.getDate()) +
        ' ' +
        pad(date.getHours()) +
        ':' +
        pad(date.getMinutes())
      );
    }

    function formatHandoff(messages, mode, truncated, t) {
      const lines = [
        t('handoff.header'),
        t('handoff.meta', { time: formatStamp(new Date()), scope: t('handoff.menu.' + mode) }),
      ];
      if (truncated) lines.push(t('handoff.truncatedNote'));
      lines.push('');
      if (mode === 'selection') {
        lines.push(t('handoff.selectionHeading'), '', messages[0].text);
      } else {
        lines.push(t('handoff.recordHeading'), '');
        for (const message of messages) {
          lines.push(
            '### ' + (message.role === 'user' ? t('handoff.role.user') : t('handoff.role.assistant')),
            '',
            message.text,
            '',
          );
        }
      }
      return lines.join('\n').trim() + '\n';
    }

    async function copyText(text) {
      try {
        if (navigator.clipboard !== undefined && typeof navigator.clipboard.writeText === 'function') {
          await navigator.clipboard.writeText(text);
          return true;
        }
      } catch (error) {
        console.warn('DeepSeek chat: clipboard write failed', error);
      }
      try {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        const copied = document.execCommand('copy');
        area.remove();
        return copied;
      } catch (error) {
        console.warn('DeepSeek chat: clipboard fallback failed', error);
        return false;
      }
    }

    function createHandoffDelivery(ctx) {
      return function deliver(text) {
        const uiSession = ctx.get('uiSession');
        const sessionId =
          uiSession !== undefined && uiSession.current !== undefined ? uiSession.current.value.key : undefined;
        if (sessionId === undefined || sessionId === null || sessionId === '') {
          return { ok: false, reason: 'no-session' };
        }
        const conversation = ctx.get('conversation');
        let shell = null;
        try {
          shell = conversation !== undefined && conversation.input !== undefined ? conversation.input.shell(sessionId) : null;
        } catch (error) {
          console.warn('DeepSeek chat: handoff could not resolve the composer', error);
        }
        if (shell === null || shell.actions === undefined) return { ok: false, reason: 'no-composer' };
        const actions = shell.actions;
        for (let attempt = 0; attempt < 2; attempt += 1) {
          try {
            const current = typeof shell.projection?.detectText === 'string' ? shell.projection.detectText : '';
            const prefix = current === '' ? '' : current.endsWith('\n\n') ? '' : current.endsWith('\n') ? '\n' : '\n\n';
            const span = { start: current.length, end: current.length, draftRev: shell.rev };
            if (actions.insertText(prefix + text, span)) return { ok: true, mode: 'insert' };
          } catch (error) {
            console.warn('DeepSeek chat: handoff insert failed', error);
          }
        }
        try {
          const current = typeof shell.projection?.detectText === 'string' ? shell.projection.detectText : '';
          actions.setDraft(current === '' ? text : current + '\n\n' + text);
          return { ok: true, mode: 'setDraft' };
        } catch (error) {
          console.warn('DeepSeek chat: handoff setDraft failed', error);
        }
        return { ok: false, reason: 'failed' };
      };
    }

    function ChatPanelSeat() {
      const seatRef = React.useRef(null);

      React.useLayoutEffect(() => {
        const seat = seatRef.current;
        if (seat === null) return undefined;
        const update = () => {
          const rect = seat.getBoundingClientRect();
          setPanelRect({
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
          });
        };
        update();
        const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(update) : null;
        if (observer !== null) observer.observe(seat);
        window.addEventListener('resize', update);
        return () => {
          if (observer !== null) observer.disconnect();
          window.removeEventListener('resize', update);
        };
      }, []);

      return h('div', { ref: seatRef, className: 'dsh-dsc-seat', 'aria-hidden': true });
    }

    function ChatPanel({ back, deliver, t, usePanelInfo }) {
      const active = usePanelInfo((info) => info.activePanelId === PANEL_ID);
      const rect = usePanelRect();
      const [opened, setOpened] = React.useState(false);
      const [phase, setPhase] = React.useState('loading');
      const [error, setError] = React.useState('');
      const [attempt, setAttempt] = React.useState(0);
      const [menuOpen, setMenuOpen] = React.useState(false);
      const [busy, setBusy] = React.useState(false);
      const [toast, setToast] = React.useState(null);
      const [pending, setPending] = React.useState(null);
      const hostRef = React.useRef(null);
      const viewRef = React.useRef(null);
      const handoffRef = React.useRef(null);
      const tRef = React.useRef(t);
      const visible = active && opened;

      React.useEffect(() => {
        tRef.current = t;
      }, [t]);

      React.useLayoutEffect(() => {
        if (active && rect !== null && rect.width > 0 && rect.height > 0 && !opened) setOpened(true);
      }, [active, rect, opened]);

      React.useEffect(() => {
        if (!visible) return undefined;
        const onKeyDown = (event) => {
          if (event.key !== 'Escape' || event.defaultPrevented) return;
          event.preventDefault();
          if (menuOpen) {
            setMenuOpen(false);
            return;
          }
          if (pending !== null) {
            setPending(null);
            return;
          }
          if (toast !== null) {
            setToast(null);
            return;
          }
          back();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
      }, [visible, back, menuOpen, pending, toast]);

      React.useEffect(() => {
        if (!menuOpen) return undefined;
        const onPointerDown = (event) => {
          const root = handoffRef.current;
          if (root !== null && !root.contains(event.target)) setMenuOpen(false);
        };
        document.addEventListener('pointerdown', onPointerDown, true);
        return () => document.removeEventListener('pointerdown', onPointerDown, true);
      }, [menuOpen]);

      React.useEffect(() => {
        if (toast === null) return undefined;
        const timer = window.setTimeout(() => setToast(null), toast.action === undefined ? 6000 : 12000);
        return () => window.clearTimeout(timer);
      }, [toast]);

      React.useEffect(() => {
        if (!opened) return undefined;
        const host = hostRef.current;
        if (host === null) return undefined;

        const desktop = globalThis.dshDesktop;
        const bridge =
          desktop !== null && typeof desktop === 'object' && desktop.protocolVersion === 1 ? desktop.browser : undefined;
        if (
          bridge === undefined ||
          typeof bridge.acquire !== 'function' ||
          typeof bridge.release !== 'function'
        ) {
          setPhase('unsupported');
          return undefined;
        }

        setPhase('loading');
        setError('');

        let disposed = false;
        let failed = false;
        let element = null;
        let lease = null;
        let navigationStarted = false;
        let firstDocument = true;
        let attachTimer = 0;
        let loadTimer = 0;

        const fail = (cause) => {
          if (disposed || failed) return;
          failed = true;
          window.clearTimeout(attachTimer);
          window.clearTimeout(loadTimer);
          const detail = cause instanceof Error ? cause.message : typeof cause === 'string' ? cause : '';
          setError(detail);
          setPhase('error');
        };

        const onDomReady = () => {
          if (disposed || navigationStarted || element === null) return;
          navigationStarted = true;
          window.clearTimeout(attachTimer);
          try {
            const loading = element.loadURL(TARGET);
            if (loading !== undefined && typeof loading.catch === 'function') {
              loading.catch((cause) => {
                if (cause !== null && typeof cause === 'object' && cause.code === 'ERR_ABORTED') return;
                if (String(cause).includes('ERR_ABORTED')) return;
                fail(cause);
              });
            }
          } catch (cause) {
            fail(cause);
          }
        };

        const onDidFailLoad = (event) => {
          if (disposed || event === undefined || event === null) return;
          if (event.isMainFrame === false) return;
          if (event.errorCode === -3) return;
          if (String(event.validatedURL ?? '').startsWith('about:blank')) return;
          fail(event.errorDescription ?? '');
        };

        const onDidFinishLoad = () => {
          if (disposed || failed || element === null) return;
          let url = '';
          try {
            url = element.getURL();
          } catch (cause) {
            return;
          }
          if (url === '' || url.startsWith('about:blank')) return;
          if (firstDocument) {
            firstDocument = false;
            try {
              element.clearHistory();
            } catch (cause) {
              // Clearing the bootstrap about:blank entry is best-effort.
            }
          }
          window.clearTimeout(loadTimer);
          setError('');
          setPhase('ready');
        };

        const onRenderProcessGone = () => fail('The DeepSeek page process stopped.');

        attachTimer = window.setTimeout(() => {
          if (!disposed && !navigationStarted) fail(tRef.current('error.startTimeout'));
        }, 15000);
        loadTimer = window.setTimeout(() => {
          if (!disposed) fail(tRef.current('error.loadTimeout'));
        }, 45000);

        void (async () => {
          try {
            const reservation = await bridge.acquire(WORKSPACE_KEY);
            if (disposed || failed) {
              await bridge.release(reservation.lease).catch(() => {});
              return;
            }
            lease = reservation.lease;

            const view = document.createElement('webview');
            element = view;
            viewRef.current = view;
            view.className = 'dsh-dsc-webview';
            view.dataset.sidebarBrowserFrame = 'webview';
            view.setAttribute('partition', reservation.partition);
            view.setAttribute('name', reservation.lease);
            view.setAttribute('src', 'about:blank#' + reservation.lease);
            view.setAttribute('aria-label', tRef.current('web.title'));
            view.addEventListener('dom-ready', onDomReady);
            view.addEventListener('did-fail-load', onDidFailLoad);
            view.addEventListener('did-finish-load', onDidFinishLoad);
            view.addEventListener('render-process-gone', onRenderProcessGone);
            host.appendChild(view);
          } catch (cause) {
            fail(cause);
          }
        })();

        return () => {
          disposed = true;
          window.clearTimeout(attachTimer);
          window.clearTimeout(loadTimer);
          const view = element;
          element = null;
          viewRef.current = null;
          if (view !== null) {
            view.removeEventListener('dom-ready', onDomReady);
            view.removeEventListener('did-fail-load', onDidFailLoad);
            view.removeEventListener('did-finish-load', onDidFinishLoad);
            view.removeEventListener('render-process-gone', onRenderProcessGone);
            view.remove();
          }
          if (lease !== null) {
            const released = lease;
            lease = null;
            bridge.release(released).catch((cause) => {
              console.warn('DeepSeek chat: could not release the embedded browser lease', cause);
            });
          }
        };
      }, [opened, attempt]);

      const showToast = React.useCallback((text, action) => {
        setToast({ text, action });
      }, []);

      const handoffErrorText = React.useCallback(
        (reason) => {
          switch (reason) {
            case 'no-messages':
              return t('handoff.error.noMessages');
            case 'no-selection':
              return t('handoff.error.noSelection');
            case 'timeout':
              return t('handoff.error.timeout');
            case 'not-ready':
              return t('handoff.error.notReady');
            case 'unsupported':
              return t('handoff.error.unsupported');
            case 'no-session':
              return t('handoff.error.noSession');
            case 'no-composer':
              return t('handoff.error.noComposer');
            default:
              return t('handoff.error.failed');
          }
        },
        [t],
      );

      const commitHandoff = React.useCallback(
        async (text, truncated, count) => {
          setPending(null);
          let delivered = { ok: false, reason: 'failed' };
          if (typeof deliver === 'function') {
            try {
              delivered = deliver(text);
            } catch (cause) {
              console.warn('DeepSeek chat: handoff delivery failed', cause);
            }
          }
          if (delivered !== null && delivered.ok === true) {
            showToast(truncated ? t('handoff.doneWithTruncation') : t('handoff.done', { count }), {
              label: t('back'),
              onClick: back,
            });
            return;
          }
          const copied = await copyText(text);
          const reason = handoffErrorText(delivered === null ? 'failed' : delivered.reason);
          showToast(copied ? reason + ' · ' + t('handoff.copied') : reason, undefined);
        },
        [deliver, back, t, showToast, handoffErrorText],
      );

      const runHandoff = React.useCallback(
        async (mode) => {
          if (busy) return;
          setMenuOpen(false);
          const view = viewRef.current;
          if (phase !== 'ready' || view === null) {
            showToast(handoffErrorText('not-ready'), undefined);
            return;
          }
          if (typeof view.executeJavaScript !== 'function') {
            showToast(handoffErrorText('unsupported'), undefined);
            return;
          }
          setBusy(true);
          let timer = 0;
          try {
            const source = '(' + extractInGuest.toString() + ')(' + JSON.stringify(mode) + ')';
            const result = await Promise.race([
              view.executeJavaScript(source, true),
              new Promise((resolve, reject) => {
                timer = window.setTimeout(() => reject(new Error('handoff-timeout')), 30000);
              }),
            ]);
            if (result === undefined || result === null) throw new Error('handoff-empty');
            if (result.ok !== true) {
              showToast(handoffErrorText(result.reason || 'failed'), undefined);
              return;
            }
            const selected = selectHandoffMessages(result.messages || [], mode);
            if (selected.length === 0) {
              showToast(handoffErrorText('no-messages'), undefined);
              return;
            }
            const text = formatHandoff(selected, mode, result.truncated === true, t);
            if (text.length > HANDOFF_LIMIT) {
              setPending({ text, chars: text.length, count: selected.length, truncated: result.truncated === true });
              return;
            }
            await commitHandoff(text, result.truncated === true, selected.length);
          } catch (cause) {
            const reason = cause instanceof Error && cause.message === 'handoff-timeout' ? 'timeout' : 'failed';
            showToast(handoffErrorText(reason), undefined);
          } finally {
            window.clearTimeout(timer);
            setBusy(false);
          }
        },
        [busy, phase, t, showToast, handoffErrorText, commitHandoff],
      );

      const reload = React.useCallback(() => {
        if (phase === 'unsupported') return;
        if (phase === 'error' || viewRef.current === null) {
          setPhase('loading');
          setError('');
          setAttempt((value) => value + 1);
          return;
        }
        setPhase('loading');
        setError('');
        try {
          viewRef.current.reload();
        } catch (cause) {
          setAttempt((value) => value + 1);
        }
      }, [phase]);

      const retry = React.useCallback(() => {
        setPhase('loading');
        setError('');
        setAttempt((value) => value + 1);
      }, []);

      const openExternal = React.useCallback(() => {
        try {
          window.open(TARGET, '_blank', 'noopener,noreferrer');
        } catch (cause) {
          console.warn('DeepSeek chat: could not open the external browser', cause);
        }
      }, []);

      if (!opened) return null;

      let overlay = null;
      if (phase === 'loading') {
        overlay = h(
          'div',
          { className: 'dsh-dsc-overlay', role: 'status', 'aria-live': 'polite' },
          h(
            'div',
            { className: 'dsh-dsc-card' },
            h('div', { className: 'dsh-dsc-spinner', 'aria-hidden': true }),
            h('h2', { className: 'dsh-dsc-heading' }, t('loading')),
            h('p', { className: 'dsh-dsc-text' }, t('loading.hint')),
            h(
              'div',
              { className: 'dsh-dsc-actions' },
              h('button', { type: 'button', className: 'dsh-dsc-button', onClick: openExternal }, t('openExternal')),
            ),
          ),
        );
      } else if (phase === 'error') {
        overlay = h(
          'div',
          { className: 'dsh-dsc-overlay', role: 'alert' },
          h(
            'div',
            { className: 'dsh-dsc-card' },
            h('div', { className: 'dsh-dsc-glyph' }, h(WarningGlyph, { size: 22 })),
            h('h2', { className: 'dsh-dsc-heading' }, t('error.title')),
            h('p', { className: 'dsh-dsc-text' }, t('error.body')),
            error === '' ? null : h('p', { className: 'dsh-dsc-detail' }, t('error.detail', { detail: error })),
            h(
              'div',
              { className: 'dsh-dsc-actions' },
              h('button', { type: 'button', className: 'dsh-dsc-button', onClick: retry }, t('retry')),
              h('button', { type: 'button', className: 'dsh-dsc-button', onClick: openExternal }, t('openExternal')),
            ),
          ),
        );
      } else if (phase === 'unsupported') {
        overlay = h(
          'div',
          { className: 'dsh-dsc-overlay' },
          h(
            'div',
            { className: 'dsh-dsc-card' },
            h('div', { className: 'dsh-dsc-glyph' }, h(ChatGlyph, { size: 22 })),
            h('h2', { className: 'dsh-dsc-heading' }, t('unsupported.title')),
            h('p', { className: 'dsh-dsc-text' }, t('unsupported.body')),
            h(
              'div',
              { className: 'dsh-dsc-actions' },
              h('button', { type: 'button', className: 'dsh-dsc-button', onClick: openExternal }, t('openExternal')),
            ),
          ),
        );
      }

      const panelStyle = {
        left: rect === null ? 0 : rect.left,
        top: rect === null ? 0 : rect.top,
        width: rect === null ? 1 : rect.width,
        height: rect === null ? 1 : rect.height,
        display: visible ? 'flex' : 'none',
      };

      return h(
        'div',
        { className: 'dsh-dsc-root' },
        h(
          'section',
          {
            className: 'dsh-dsc-panel',
            style: panelStyle,
            'aria-label': t('window.label'),
            'aria-hidden': visible ? undefined : true,
          },
          h(
            'header',
            { className: 'dsh-dsc-bar' },
            h(IconButton, { label: t('back'), onClick: back }, h(BackGlyph, { size: 16 })),
            h('span', { className: 'dsh-dsc-brand' }, h(ChatGlyph, { size: 18 })),
            h('span', { className: 'dsh-dsc-title' }, t('web.title')),
            h('span', { className: 'dsh-dsc-spacer' }),
            h(
              'div',
              { className: 'dsh-dsc-handoff', ref: handoffRef },
              h(
                'button',
                {
                  type: 'button',
                  className: 'dsh-dsc-handoff-main',
                  title: busy ? t('handoff.busy') : t('handoff.title'),
                  'aria-label': t('handoff.title'),
                  onClick: () => {
                    void runHandoff('all');
                  },
                  disabled: busy || phase !== 'ready',
                },
                busy
                  ? h('span', { className: 'dsh-dsc-handoff-spinner', 'aria-hidden': true })
                  : h(HandoffGlyph, { size: 14 }),
                h('span', null, t('handoff')),
              ),
              h(
                'button',
                {
                  type: 'button',
                  className: 'dsh-dsc-handoff-caret',
                  title: t('handoff.menu.all'),
                  'aria-label': t('handoff.menu.all'),
                  'aria-expanded': menuOpen,
                  onClick: () => setMenuOpen((value) => !value),
                  disabled: busy || phase !== 'ready',
                },
                h(ChevronDownGlyph, { size: 12 }),
              ),
              menuOpen && phase === 'ready'
                ? h(
                    'div',
                    { className: 'dsh-dsc-menu', role: 'menu' },
                    HANDOFF_MODES.map((mode) =>
                      h(
                        'button',
                        {
                          key: mode,
                          type: 'button',
                          role: 'menuitemradio',
                          'aria-checked': mode === 'all',
                          className: 'dsh-dsc-menu-item',
                          onClick: () => {
                            void runHandoff(mode);
                          },
                        },
                        h(
                          'span',
                          { className: 'dsh-dsc-menu-check' },
                          mode === 'all' ? h(CheckGlyph, { size: 13 }) : null,
                        ),
                        h('span', null, t('handoff.menu.' + mode)),
                      ),
                    ),
                  )
                : null,
            ),
            h(IconButton, { label: t('reload'), onClick: reload }, h(ReloadGlyph, { size: 15 })),
            h(IconButton, { label: t('openExternal'), onClick: openExternal }, h(ExternalGlyph, { size: 15 })),
          ),
          h(
            'div',
            { className: 'dsh-dsc-body' },
            h('div', { ref: hostRef, className: 'dsh-dsc-host' }),
            overlay,
          ),
          toast !== null
            ? h(
                'div',
                { className: 'dsh-dsc-toast', role: 'status', 'aria-live': 'polite' },
                h('span', { className: 'dsh-dsc-toast-text' }, toast.text),
                toast.action === undefined
                  ? null
                  : h('button', { type: 'button', onClick: toast.action.onClick }, toast.action.label),
              )
            : null,
          pending !== null
            ? h(
                'div',
                { className: 'dsh-dsc-modal', role: 'dialog', 'aria-modal': 'true' },
                h(
                  'div',
                  { className: 'dsh-dsc-modal-card' },
                  h('h2', { className: 'dsh-dsc-heading' }, t('handoff.confirm.title')),
                  h('p', { className: 'dsh-dsc-text' }, t('handoff.confirm.body', { count: pending.chars })),
                  h(
                    'div',
                    { className: 'dsh-dsc-actions' },
                    h(
                      'button',
                      {
                        type: 'button',
                        className: 'dsh-dsc-button',
                        onClick: () => {
                          const value = pending;
                          if (value === null) return;
                          setPending(null);
                          void commitHandoff(value.text, value.truncated, value.count);
                        },
                      },
                      t('handoff.confirm.ok'),
                    ),
                    h(
                      'button',
                      { type: 'button', className: 'dsh-dsc-button', onClick: () => setPending(null) },
                      t('handoff.cancel'),
                    ),
                  ),
                ),
              )
            : null,
        ),
      );
    }

    function apply(ctx) {
      const t = ctx.locale.bind(NS);
      ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'deepseek-web-chat: dictionaries');

      ctx.effect(() => {
        const tag = document.createElement('style');
        tag.dataset.plugin = '@local/dsh-deepseek-web-chat';
        tag.textContent = CSS;
        document.head.appendChild(tag);
        return () => {
          tag.remove();
        };
      }, 'deepseek-web-chat: styles');

      const back = () => ctx.layout.selectPanel(null);
      const deliver = createHandoffDelivery(ctx);

      ctx.slots.inject('main', () =>
        ctx.slots.register(
          {
            name: 'main',
            key: PANEL_ID,
          },
          ChatPanelSeat,
        ),
      );

      ctx.slots.inject('sidebar.panellist', () =>
        ctx.slots.register(
          {
            name: 'sidebar.panellist',
            id: PANEL_ID,
            order: 5,
            label: () => t('panel'),
          },
          ChatGlyph,
        ),
      );

      ctx.slots.inject('shell.overlay', () =>
        ctx.slots.register(
          {
            name: 'shell.overlay',
            id: 'deepseek-web-chat.panel',
            order: -5,
            locale: NS,
            inject: () => ({ back, deliver }),
          },
          ChatPanel,
        ),
      );
    }

    return {
      inject: ['slots', 'locale', 'layout'],
      apply,
    };
  },
});
