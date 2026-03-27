---
sidebar_label: 新功能
title: 新功能
description: 您可以在 DHTMLX JavaScript UI 库的文档中探索 DHTMLX RichText 的新功能及其发布历史。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

## 版本 2.0.5 {#version-205}

发布于 2026 年 3 月 6 日

### 修复 {#fixes}

- IME 输入未被正确处理
- 基于组合输入法的输入（例如，桌面端中文、日文、韩文）未被正确处理
- 解析 HTML 时忽略了`margin-left`和`line-height`属性
- 内联元素从块级父元素继承属性
- 无法在两个编辑器实例之间复制文本
- 当两个（或更多）编辑器实例处于活动状态时，选区处理不正确
- 当段落中唯一内容为图片时，光标定位不正确
- 下标和上标元素无限嵌套
- 粘贴图片时将其内联，而非先上传
- 在特定位置（首行或末行）无法移除空的内联块
- 编辑器在输入时不会滚动到光标位置
- Android 上的输入未被正确处理
- HR 元素的选区处理不正确
- 初始值为空时渲染不正确
- 复制内容时，若包含自闭合块则可能失败
- Chrome：无法从上下文菜单插入 emoji
- Firefox：全选（CTRL+A）未被正确处理

## 版本 2.0.4 {#version-204}

发布于 2025 年 10 月 15 日

### 修复 {#fixes-1}

- 段落的范围选区不正确
- 链接弹出框在紧邻已链接图片时不显示
- 工具栏初始值与实际内容不匹配

## 版本 2.0.3 {#version-203}

发布于 2025 年 8 月 27 日

### 修复 {#fixes-2}

- 点击水平线导致脚本错误
- 默认行高不正确
- 内容样式包含重复选择器
- 解析 HTML 时纯文本块忽略样式变更
- 解析器忽略 HTML 中转义的字体名称
- 解析器忽略 HTML 中的`margin-left`和`line-height`属性

## 版本 2.0.2 {#version-202}

发布于 2025 年 8 月 4 日

### 修复 {#fixes-3}

- 更新了包内容

## 版本 2.0.1 {#version-201}

发布于 2025 年 7 月 30 日

### 修复 {#fixes-4}

- 更新`defaultStyles`属性的类型定义

## 版本 2.0 {#version-20}

发布于 2025 年 7 月 30 日

:::note[注意]
v1.2 的 API 与 v2.0 不兼容。请参阅[**迁移指南**](news/migration.md)获取更多信息。
:::

### 新功能 {#new-functionality}

- **新一代文本渲染**
  通过我们全新的引擎，体验更流畅、更快速、更精准的文本渲染

- **精细化工具栏配置**
  完全掌控工具栏：
  - 定义[各个工具栏控件](guides/configuration.md/#default-toolbar-controls)及其顺序
  - 添加[自定义控件](guides/configuration.md/#custom-toolbar-controls)

- **可选的 [menubar（菜单栏）](api/config/menubar.md)**
  在编辑器顶部启用经典菜单样式界面

- **增强的[文档模式](guides/configuration.md/#layout-modes)**
  新增对不同文档尺寸的支持

- **图片支持**
  - 插入图片并支持[上传功能](api/config/image-upload-url.md)
  - 以交互方式[调整图片大小](api/events/resize-image.md)

- **改进的链接体验**
  重新设计的[弹出交互](api/events/show-popup.md)，提升易用性

- **新格式化工具**
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

### 新增 API {#new-api}

#### 新增属性 {#new-properties}

- [`fullscreenMode`](api/config/fullscreen-mode.md)
- [`imageUploadUrl`](api/config/image-upload-url.md)
- [`layoutMode`](api/config/layout-mode.md)
- [`locale`](api/config/locale.md)
- [`menubar`](api/config/menubar.md)
- [`toolbar`](api/config/toolbar.md)
- [`value`](api/config/value.md)

#### 新增方法 {#new-methods}

- [`setConfig()`](api/methods/set-config.md) — 动态更新配置
- [`setLocale()`](api/methods/set-locale.md) — 动态切换语言区域

#### 新增内部方法 {#new-internal-methods}

- [`api.exec()`](api/internal/exec.md)
- [`api.intercept()`](api/internal/intercept.md)
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)
- [`api.getState()`](api/internal/get-state.md)

#### 新增事件 {#new-events}

新增事件的完整列表请参见[此处](api/overview/events_overview.md)

### 更新 API {#updated-api}

#### 更新属性 {#updated-properties}

- [`defaultStyles`](api/config/default-styles.md)

#### 更新方法 {#updated-methods}

- [`setValue()`](api/methods/set-value.md)
- [`getValue()`](api/methods/get-value.md)

#### 更新内部方法 {#updated-internal-methods}

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
