---
sidebar_label: 最新动态
title: 最新动态
description: 您可以在 DHTMLX JavaScript UI 库文档中了解 DHTMLX RichText 的最新特性及发布历史。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天试用版。
---

## 版本 2.0.5 

发布于 2026 年 3 月 6 日

### 问题修复

- IME 输入处理不正确
- 基于输入法的文字输入（例如桌面端的中文、日文、韩文）处理不正确
- 解析 HTML 时忽略 `margin-left` 和 `line-height` 属性
- 内联元素从块级父元素继承属性
- 无法在两个编辑器实例之间复制文本
- 两个（或更多）编辑器实例同时激活时，选区处理不正确
- 段落中仅含图片时，光标定位不正确
- 下标和上标元素出现无限嵌套
- 粘贴图片时直接内联插入，而非先上传
- 在特定位置（首行或末行）无法删除空内联块
- 输入时编辑器不随光标滚动
- Android 上的输入处理不正确
- HR 元素的选区处理不正确
- 初始值为空时渲染不正确
- 内容包含自闭合块时，复制操作可能失败
- Chrome：无法从右键菜单插入表情符号
- Firefox：全选（CTRL+A）处理不正确

## 版本 2.0.4

发布于 2025 年 10 月 15 日

### 问题修复

- 段落的范围选区不正确
- 链接弹窗在紧邻链接图片时不显示
- 工具栏初始值与实际内容不一致

## 版本 2.0.3

发布于 2025 年 8 月 27 日

### 问题修复

- 点击水平线时触发脚本错误
- 默认行高不正确
- 内容样式包含重复选择器
- 解析 HTML 时纯文本块忽略样式更改
- 解析器忽略 HTML 中经过转义的字体名称
- 解析器忽略 HTML 中的 `margin-left` 和 `line-height` 属性

## 版本 2.0.2

发布于 2025 年 8 月 4 日

### 问题修复

- 更新了包内容

## 版本 2.0.1

发布于 2025 年 7 月 30 日

### 问题修复

- 更新 `defaultStyles` 属性的类型定义

## 版本 2.0

发布于 2025 年 7 月 30 日

:::note
v1.2 的 API 与 v2.0 不兼容。请参阅[**迁移指南**](news/migration.md)了解更多信息。
:::

### 新功能

- **新一代文本渲染**  
  采用全新引擎，带来更流畅、更快速、更精准的文本渲染体验

- **精细化工具栏配置**  
  完全掌控工具栏：  
  - 定义[单个工具栏控件](guides/configuration.md/#default-toolbar-controls)及其顺序
  - 添加[自定义控件](guides/configuration.md/#custom-toolbar-controls)

- **可选的[菜单栏](api/config/menubar.md)**  
  在编辑器顶部启用经典菜单样式界面

- **增强的[文档模式](guides/configuration.md/#layout-modes)**  
  新增对不同文档尺寸的支持

- **图片支持**  
  - 通过[上传功能](api/config/image-upload-url.md)插入图片  
  - 交互式[调整图片大小](api/events/resize-image.md)  

- **改进的链接体验**  
  重新设计的[弹窗交互](api/events/show-popup.md)，提升可用性

- **新格式化工具**  
  - 文本对齐：**两端对齐**  
  - 插入[水平线](api/events/insert-line.md)  
  - [增加缩进](api/events/indent.md) / [减少缩进](api/events/outdent.md)  
  - 设置[行高](api/events/set-line-height.md)  
  - 应用[下标](api/events/subscript.md) / [上标](api/events/superscript.md)

- **列表管理**  
  在内容中便捷地[插入和管理列表](api/events/insert-list.md)

- **导入/导出与打印**  
  - [导入 DOCX](api/events/import.md) 文件
  - 将内容[导出](api/events/export.md)为 DOCX 或 PDF
  - 直接从编辑器[打印](api/events/print.md)文档

- **键盘快捷键**  
  扩展了对常用格式化和编辑快捷键的支持

###  新 API

#### 新属性

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

####  新方法

- [`setConfig()`](api/methods/set-config.md) — 动态更新配置  
- [`setLocale()`](api/methods/set-locale.md) — 即时切换语言

#### 新内部方法

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### 新事件

完整的新事件列表请参阅[此处](api/overview/events_overview.md)

### 更新的 API

#### 更新的属性

- [`defaultStyles`](api/config/default-styles.md)

#### 更新的方法

- [`setValue()`](api/methods/set-value.md)  
- [`getValue()`](api/methods/get-value.md)

#### 更新的内部方法

- [`api.detach()`](api/internal/detach.md)  
- [`api.on()`](api/internal/on.md)

## 已移除的 API

:::warning
请勿在您的项目中使用已移除的 API！<br/> 请参阅[迁移](news/migration.md)主题了解更多信息。
:::

### [已移除的属性](news/migration.md#properties-migration)

- [`customStats`](news/migration.md#--customstats)  
- [`mode`](news/migration.md#--mode--layoutmode)  
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [已移除的方法](news/migration.md#methods-migration)

- `exitFullScreen()`  
- `fullScreen()`  
- `getEditorAPI()`  
- `getStats()`  
- `paint()`

### 已移除的内部方法

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### 已移除的事件

- `Action`  
- `Change`  
- `selectionChange`  
- `selectionRefresh`
