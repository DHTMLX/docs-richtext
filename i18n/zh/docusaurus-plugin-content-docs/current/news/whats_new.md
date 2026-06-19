---
sidebar_label: 最新动态
title: 最新动态
description: 您可以在 DHTMLX JavaScript UI 库文档中了解 DHTMLX RichText 的最新功能及版本历史。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

## 版本 2.1 {#version-21}

发布于 2026 年 6 月 X 日

### 新功能 {#new-functionality}

- [`imageUploadUrl`](api/config/image-upload-url.md) 现为可选项：省略时，图片将以 base64 数据 URL 的形式内联插入，无需服务器支持
- 拖放图片插入：将图片文件直接拖入编辑器区域即可插入
- Markdown 支持：通过 [`setValue()`](api/methods/set-value.md)、[`getValue()`](api/methods/get-value.md) 和 [`insertValue()`](api/methods/insert-value.md) 方法中的 `markdown` 编码器，解析和序列化编辑器内容为 Markdown 格式
- 通过 [`triggers`](api/config/triggers.md) 属性支持提及、标签和自定义下拉触发器：输入 `@`、`#`、`/` 或 `:` 等字符可打开建议下拉框，并将所选项作为不可编辑的 token 插入（参见[提及与标签](guides/mentions_and_tags.md)指南）
- 通过 [`triggerTemplate`](api/config/trigger-template.md) 属性自定义建议项的渲染方式（例如，显示头像、姓名和邮箱）
- 用户选择触发器时的自定义操作：执行自定义代码（插入 emoji、触发斜杠命令等），而非插入 token
- 剪贴板支持（复制、剪切和粘贴）：在 RichText 实例之间保留格式，将外部内容以纯文本形式插入
- 按词和按行删除快捷键：使用 `Ctrl+Backspace` / `Ctrl+Delete`（Windows/Linux）或 `Opt+Backspace` / `Opt+Delete`（macOS）删除前一个/后一个单词；使用 `Cmd+Backspace` / `Cmd+Delete`（仅 macOS）删除前一个/后一个可视行

### 新增 API {#new-api}

#### 新增属性 {#new-properties}

- [`triggers`](api/config/triggers.md) — 定义用于插入提及、标签和其他 token 的下拉触发器
- [`triggerTemplate`](api/config/trigger-template.md) — 自定义 RichText 在建议下拉框中渲染条目的方式

#### 新增方法 {#new-methods}

- [`insertValue()`](api/methods/insert-value.md) — 在光标位置插入文本、Markdown 或 HTML 内容，或替换选中的文本

#### 新增事件 {#new-events}

- [`show-suggest`](api/events/show-suggest.md) — 当已配置触发器的建议下拉框打开时触发
- [`insert-token`](api/events/insert-token.md) — 用户在下拉框中选择建议项且 RichText 将其作为 token 插入后触发
- [`hide-suggest`](api/events/hide-suggest.md) — 当建议下拉框关闭时触发

### 修复 {#fixes}

- 粘贴内联内容时出现的问题（包括放置在提及、图片等内联元素内部或附近的内容）
- 将图片拖放到其自身上时抛出错误

## 版本 2.0.6 {#version-206}

发布于 2026 年 5 月 28 日

### 新功能 {#new-functionality-1}

- 上下文感知的 OL/UL 工具栏按钮，可根据选区切换或转换列表类型
- 通过**增加缩进**和**减少缩进**按钮更改列表嵌套级别
- 在空列表项中按 Enter 键可退出列表或减少其嵌套级别
- 已访问链接显示独特颜色

### 新增 API {#new-api-1}

#### 新增事件 {#new-events-1}

- [`toggle-list`](api/events/toggle-list.md) — 用户切换所选块的列表时触发

### 修复 {#fixes-1}

- 列表标记的水平对齐不正确
- 有序列表与无序列表之间的内边距不一致
- 清除格式时未清除块级属性
- 列表项内的标题和块引用样式不正确
- 水平线内可见多余的 input 元素
- 在列表中间或末尾插入水平线时编辑器卡死

## 版本 2.0.5 {#version-205}

发布于 2026 年 3 月 6 日

### 修复 {#fixes-2}

- IME 输入未被正确处理
- 基于组合输入法的输入（例如，桌面端的中文、日文、韩文）未被正确处理
- 解析 HTML 时忽略 `margin-left` 和 `line-height` 属性
- 内联元素从块级父元素继承属性
- 无法在两个编辑器实例之间复制文本
- 两个（或更多）编辑器实例同时激活时选区处理不正确
- 段落中唯一内容为图片时光标定位不正确
- 上标和下标元素无限嵌套
- 粘贴图片时内联插入而非先上传
- 在特定位置（首行或末行）无法移除空内联块
- 输入时编辑器未滚动至光标位置
- Android 上的输入未被正确处理
- HR 元素的选区处理不正确
- 初始值为空时渲染不正确
- 内容包含自闭合块时复制可能失败
- Chrome：无法从右键菜单插入 emoji
- Firefox：全选（CTRL+A）未被正确处理

## 版本 2.0.4 {#version-204}

发布于 2025 年 10 月 15 日

### 修复 {#fixes-3}

- 段落的范围选区不正确
- 与链接图片相邻时链接弹出框不显示
- 工具栏初始值与实际内容不一致

## 版本 2.0.3 {#version-203}

发布于 2025 年 8 月 27 日

### 修复 {#fixes-4}

- 点击水平线导致脚本错误
- 默认行高不正确
- 内容样式包含重复选择器
- 解析 HTML 时纯文本块忽略样式更改
- 解析器忽略 HTML 中转义的字体名称
- 解析器忽略 HTML 中的 `margin-left` 和 `line-height` 属性

## 版本 2.0.2 {#version-202}

发布于 2025 年 8 月 4 日

### 修复 {#fixes-5}

- 更新了软件包内容

## 版本 2.0.1 {#version-201}

发布于 2025 年 7 月 30 日

### 修复 {#fixes-6}

- 更新 `defaultStyles` 属性的类型定义

## 版本 2.0 {#version-20}

发布于 2025 年 7 月 30 日

:::note[注意]
v1.2 的 API 与 v2.0 不兼容。请参阅[**迁移指南**](news/migration.md)获取更多信息。
:::

### 新功能 {#new-functionality-2}

- **新一代文本渲染**  
  全新渲染引擎带来更流畅、更快速、更精准的文本渲染体验

- **精细化工具栏配置**  
  全面掌控工具栏：  
  - 定义[单个工具栏控件](guides/configuration.md/#default-toolbar-controls)及其顺序
  - 添加[自定义控件](guides/configuration.md/#add-custom-toolbar-controls)

- **可选的[菜单栏](api/config/menubar.md)**  
  在编辑器顶部启用经典菜单栏界面

- **增强的[文档模式](guides/configuration.md/#layout-modes)**  
  新增对不同文档尺寸的支持

- **图片支持**  
  - 插入带[上传功能](api/config/image-upload-url.md)的图片  
  - 交互式[调整图片大小](api/events/resize-image.md)  

- **改进的链接体验**  
  重新设计的[弹出框交互](api/events/show-popup.md)，提升可用性

- **新增格式化工具**  
  - 文本对齐：**两端对齐**  
  - 插入[水平线](api/events/insert-line.md)  
  - [增加缩进](api/events/indent.md) / [减少缩进](api/events/outdent.md)  
  - 设置[行高](api/events/set-line-height.md)  
  - 应用[下标](api/events/subscript.md) / [上标](api/events/superscript.md)

- **列表管理**  
  在内容中轻松[插入和管理列表](api/events/insert-list.md)

- **导入/导出与打印**  
  - [导入 DOCX](api/events/import.md) 文件
  - 将内容[导出](api/events/export.md)为 DOCX 或 PDF
  - 直接从编辑器[打印](api/events/print.md)文档

- **键盘快捷键**  
  扩展了对常用格式化和编辑快捷键的支持

### 新增 API {#new-api-2}

#### 新增属性 {#new-properties-1}

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

#### 新增方法 {#new-methods-1}

- [`setConfig()`](api/methods/set-config.md) — 动态更新配置  
- [`setLocale()`](api/methods/set-locale.md) — 动态切换语言

#### 新增内部方法 {#new-internal-methods}

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### 新增事件 {#new-events-2}

完整的新增事件列表请参见[此处](api/overview/events_overview.md)

### 更新的 API {#updated-api}

#### 更新的属性 {#updated-properties}

- [`defaultStyles`](api/config/default-styles.md)

#### 更新的方法 {#updated-methods}

- [`setValue()`](api/methods/set-value.md)  
- [`getValue()`](api/methods/get-value.md)

#### 更新的内部方法 {#updated-internal-methods}

- [`api.detach()`](api/internal/detach.md)  
- [`api.on()`](api/internal/on.md)

## 已移除的 API {#removed-api}

:::warning[警告]
请勿在您的项目中使用已移除的 API！<br/> 请参阅[迁移](news/migration.md)主题获取更多信息。
:::

### [已移除的属性](news/migration.md#properties-migration) {#removed-properties}

- [`customStats`](news/migration.md#--customstats)  
- [`mode`](news/migration.md#--mode--layoutmode)  
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [已移除的方法](news/migration.md#methods-migration) {#removed-methods}

- `exitFullScreen()`  
- `fullScreen()`  
- `getEditorAPI()`  
- `getStats()`  
- `paint()`

### 已移除的内部方法 {#removed-internal-methods}

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### 已移除的事件 {#removed-events}

- `Action`  
- `Change`  
- `selectionChange`  
- `selectionRefresh`
