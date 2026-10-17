# 接力到 Harness · 需求文档

> 版本：v0.1（需求确认稿）
> 日期：2026-10-17
> 关联插件：`@local/dsh-deepseek-web-chat` V1.0
> 状态：待确认，未开始开发

## 1. 背景与目标

当前插件把 `chat.deepseek.com` 嵌进 Harness 主界面。实际用法是：在 DeepSeek 面板里头脑风暴，把需求聊清楚，然后回到 Harness 让 agent 接着执行。

痛点是两个对话互不相通，需求结论只能手动复制粘贴，长对话尤其费劲。

**目标**：提供一个一次性的「接力」动作，把 DeepSeek 网页聊天中的对话内容带进 Harness 当前对话的输入框，作为草稿；用户补一句任务指令后自己发送。

**非目标**：不是实时同步，也不是双向镜像。

## 2. 调研依据：Codex 怎么做

拆了本机 `ChatGPT.app`（Codex 桌面端）的 JS bundle，Appshots 的实际链路：

1. 主进程注册全局热键（默认 `DoubleCommand` / `DoubleAlt`），按设置分流到当前对话或新对话。
2. 渲染进程向主进程要「最前窗口」，再发起 `computer-use-start-capture`。
3. 主进程转给原生 `SkyComputerUseService`，用 Accessibility 树取文本、另存截图，流式回传 `metadata` / `axText` / `screenshot` / `completed`。
4. 渲染进程把结果作为 **输入框附件卡片**（截图 + 「View text」可看辅助功能文本），**不自动发送**。
5. 发送时截图作为文件上传，`appshotContexts`（含 `axTree`）作为消息元数据提交。

关键结论：

- Codex 抓的是**整个窗口能拿到的内容**，不提供“只要最后一条”的选项。
- Codex **不注入任何引导语**，附件只是上下文，任务由用户自己写。
- 我们的场景更有利：DeepSeek 在 webview 里，DOM 可直接取纯文本，不需要屏幕录制/辅助功能权限，还能按消息切分。

参考：[Appshots 文档](https://learn.chatgpt.com/docs/appshots)、[Codex in-app browser](https://developers.openai.com/codex/app/browser)

## 3. 用户流程

1. 在 DeepSeek 面板聊完，确认需求。
2. 点顶栏「接力到 Harness」。
3. 插件读取当前 DeepSeek 对话（默认整段）。
4. 内容追加到 Harness 当前会话输入框末尾，作为草稿。
5. Toast 提示；点「返回对话」回到 Harness，补一句「按以上需求开始实现」并发送。

## 4. 功能范围（V1）

### 4.1 入口

- 位置：面板顶栏，放在「刷新」左侧（现有顺序：返回、图标、标题、弹性空间、刷新、在浏览器中打开）。
- 主按钮：点击 = 抓**整段对话**。
- 按钮右侧下拉箭头，菜单项：
  - 整段对话（默认，带勾选）
  - 最后一条回复
  - 当前一轮问答（最后一条用户消息 + 其后的回复）
  - 选中片段（guest 页无选中时禁用）
- 抓取中：按钮禁用并显示 spinner；重复点击忽略。
- 样式沿用现有 28px 图标按钮与 `dsh-dsc-*` 变量，不引入新的视觉体系。

### 4.2 抓取规则

| 模式 | 取什么 |
| --- | --- |
| 整段对话 | 按 DOM 顺序读取所有 user / assistant 消息 |
| 最后一条回复 | 最后一条 assistant 消息 |
| 当前一轮 | 最后一条 user 消息 + 其后所有 assistant 消息 |
| 选中片段 | guest 页 `window.getSelection().toString()` |

- 列表若懒加载：先滚到顶、等待加载，再滚到底收集；按消息节点去重，设最大滚动次数与超时。
- 空对话、读取失败、选中为空：不插入，给出明确提示。

### 4.3 插入格式

```text
【需求交接 · 来自 DeepSeek 网页聊天】
时间：2026-10-17 22:05
范围：整段对话（12 条消息）

## 对话记录

### 我
……

### DeepSeek
……

### 我
……

### DeepSeek
……
```

- 时间用本地时区，格式 `YYYY-MM-DD HH:mm`。
- 角色固定用「我」「DeepSeek」，顺序与页面一致。
- 保留代码块围栏与语言标记；表格尽量还原为 Markdown。
- 不加任何“请按以上需求继续”的引导语（与 Codex 一致）。

### 4.4 落地行为

- 目标会话：**点按钮时当前激活的 Harness 会话**（面板不随会话切换，这是已知行为）。
- 追加到输入框末尾，不覆盖已有草稿；已有内容时用空行分隔。
- **不自动发送**，光标不强制聚焦（面板仍在前台）。
- 成功：toast「已插入当前对话」+「返回对话」操作。
- 输入框不可用：提示「已复制到剪贴板，请返回对话后粘贴」作为兜底。

### 4.5 明确不做（V1）

- 每轮自动同步
- 反向插入（Harness → DeepSeek）
- 全局热键
- 多会话/跨会话选择
- 截图附件

## 5. 技术方案（含待验证项）

### 5.1 读取（webview）

- 用 `webview.executeJavaScript(functionSource + '(' + JSON.stringify(mode) + ')')` 在 guest 页面执行提取函数，返回 `{ ok, messages: [{ role, text }], truncated }`。
- 消息容器是虚拟列表：以 `[data-virtual-list-item-key]` 为节点，先滚到顶、再分步滚到底，边滚边收集；结束后恢复原滚动位置。
- 角色判定：节点内存在 `.ds-assistant-message-main-content` 即 assistant，否则为 user；思考内容 `.ds-think-content` 不计入正文。
- 文本提取：自写 DOM → 文本遍历，保留 `pre` 代码块围栏、段落/列表换行；按钮、SVG、`aria-hidden` 节点剔除。
- 选中片段：guest 页 `window.getSelection().toString()`。

### 5.2 写入（Harness composer）

- 从 `ctx.get('uiSession')` 取当前会话 id（`current.value.key`）。
- 从 `ctx.get('conversation')` 取 `input.shell(sessionId)`，用 `shell.actions.insertText(payload, { start, end, draftRev })` 在草稿末尾插入；已有内容时前置空行。
- `insertText` 返回 false 时，退回 `shell.actions.setDraft(current + payload)`。
- 仍失败则复制到剪贴板，提示手动粘贴；不再做 DOM 模拟输入。

### 5.3 Spike 结果（2026-10-17，读代码确认）

| 项目 | 结果 |
| --- | --- |
| `webview.executeJavaScript` | **可用**。DSH 主进程 `will-attach-webview` 只设置 `sandbox: true` / `contextIsolation: true` / `nodeIntegration: false`，没有关闭 JavaScript；主窗口 `webviewTag: true`。embedder 可以直接调用 `view.executeJavaScript(code)`，在 guest 主世界执行。打包版 guest 的 devTools 关闭，但不影响该调用。 |
| DSH composer 接口 | **有干净入口**。`ctx.conversation`（ConversationController）暴露 `input.shell(sessionId)`，其 `actions` 提供 `captureInsertion()` / `insertText(text, span)` / `setDraft(text)`；当前会话 id 取 `ctx.uiSession.current.value.key`。插入走 Lexical，可撤销，不必模拟 DOM 输入。 |
| 面板打开时输入框挂载 | **仍挂载**。插件面板是 `shell.overlay` 的 fixed 覆盖层，下层 Conversation 不卸载；shell 按 sessionId 常驻，未挂载时也会按需创建。 |
| DeepSeek DOM | **是虚拟列表**。消息节点带 `data-virtual-list-item-key`，只渲染可视窗口；必须滚动收集。助手正文有稳定类 `.ds-assistant-message-main-content`，思考内容 `.ds-think-content`；用户消息类是构建哈希（如 `fbb737a4`），不可依赖，按“没有助手正文”判定为用户。 |
| 长文本 / 剪贴板 | 未做运行时压测；V1 以 2 万字符为确认阈值，剪贴板作为失败兜底。 |

**结论**：读取用 `executeJavaScript` + 滚动收集；写入用 `ctx.conversation.input.shell(sessionId).actions`，不再需要 DOM 模拟输入方案。

## 6. 风险与对策

| 风险 | 影响 | 对策 |
| --- | --- | --- |
| DeepSeek 网页改版 | 选择器失效，读不到内容 | 选择器集中配置 + 多套兜底 + 失败提示手动复制 |
| 整段对话很长 | 占用大量 token、输入框卡顿 | 插入前显示字数；超过阈值（如 2 万字符）二次确认 |
| 懒加载/虚拟列表 | 整段抓不全 | 滚动收集 + 去重 + 明确提示“可能不完整” |
| DSH 输入框未挂载 | 无法直接写入 | 返回对话后写入，或剪贴板兜底 |
| 登录态非持久 | 重启后需重新登录 | 与接力功能解耦，不影响已有对话内容 |
| 隐私 | 对话内容被带入 Harness | 仅本机传递；不额外上传；提示用户确认内容 |

## 7. 验收标准

- 在 DeepSeek 面板有 10 轮以上对话时，点「接力到 Harness」，Harness 当前会话输入框出现完整记录，角色、顺序正确，代码块未丢失。
- 默认整段；菜单切换「最后一条 / 当前一轮 / 选中」均生效。
- 不自动发送；已有草稿不被覆盖。
- 无内容/读取失败时有提示，且能手动复制兜底。
- 不影响插件现有的面板打开、返回、刷新、浏览器打开、登录保持等行为。

## 8. 里程碑

- **V1**：按钮 + 四种范围 + 草稿插入 + toast + 失败兜底。
- **V1.1**：附件卡片（若 DSH 接口支持）、快捷键、可选截图。
- 每次发布同步更新 `版本迭代记录.md` 与 `package.json` 版本号，并提交 Git。

## 9. 决策记录

| 日期 | 决策 | 说明 |
| --- | --- | --- |
| 2026-10-17 | 默认抓整段对话 | 对齐 Codex Appshots 的“整窗内容”，保证交接背景完整；菜单可切最后一条 |
| 2026-10-17 | 先做文本块，验证后升级附件卡片 | 文本块不依赖 DSH 私有接口，能最快跑通闭环；卡片作为体验升级 |
| 2026-10-17 | 不自动发送、不加引导语 | 与 Codex 一致，避免误触发和强加指令 |
