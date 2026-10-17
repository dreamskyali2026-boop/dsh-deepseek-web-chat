# DeepSeek 网页聊天（Harness 插件）

> 作者：Dream　·　当前版本：V1.0　·　版本记录见 [版本迭代记录.md](./版本迭代记录.md)

在 DeepSeek Harness 桌面客户端里增加一个与主界面融合的 DeepSeek 网页聊天面板，直接加载 <https://chat.deepseek.com/>。

## 使用

1. 安装后，左侧栏会出现一个 DeepSeek 鲸鱼图标，位于「插件」和「定时任务」之间。
2. 点击图标，会在主内容区打开 DeepSeek 网页聊天面板（不是单独的浮窗）。
3. 点击面板左上角的返回箭头、左侧栏的其他面板或会话即可离开；聊天页面会继续保持挂载，再次点击图标即可回到原来的对话。
4. 面板顶部提供「返回对话」「刷新」「在浏览器中打开」三个操作。

## 登录与浏览器会话

内嵌面板使用 Harness 桌面端提供的嵌入式浏览器租约（与内置 Browser 侧栏相同的机制）。该会话是非持久化分区：

- 在应用运行期间，登录状态会保留；离开聊天面板、切换面板、刷新 Harness 页面都不会丢失。
- 完全退出并重新启动应用后，需要重新登录 DeepSeek 网页版。
- 如果希望使用浏览器自身的持久登录，请点击面板顶部的「在浏览器中打开」。它会在系统默认浏览器中打开同一个地址。

## 为什么不修改客户端文件

这个功能以外部 Cordis bundle 的形式安装在当前 profile（`~/.dsh/profiles/desktop`）中，不会写入 `/Applications/DeepSeek Harness.app`，因此后续客户端更新不会覆盖它。插件通过 `link:` 指向本目录，所以请不要移动或删除本目录；否则需要重新安装。

## 文件

- `package.json`：bundle 与客户端模块清单
- `cordis.patch.yml`：向 profile 插入插件行
- `index.js`：Host 侧空实现（功能全部在客户端）
- `client.js`：侧栏图标、主内容区聊天面板、嵌入式浏览器租约与加载状态
- `locale/*.json`：插件管理器中显示的名称与说明
- `icon.svg`：插件图标，使用 DeepSeek 官方网页 favicon 中的鲸鱼标记（<https://fe-static.deepseek.com/chat/favicon.svg>），仅用于标识 DeepSeek 网页聊天入口

## 兼容性说明

内嵌网页依赖桌面端 preload 暴露的 `dshDesktop.browser` 租约接口。若未来客户端移除或修改该接口，插件会显示「当前环境不支持内嵌网页」，此时仍可使用「在浏览器中打开」；插件本身不会影响 Harness 启动。
