---
sidebar_label: 最新动态
title: 最新动态
description: 在 DHTMLX RichText 的文档中查看最新更新和发布历史。您将找到指南、API 参考、代码示例、在线演示，以及 DHTMLX RichText 的 30 天免费试用下载。
---

## 版本 2.0.4

发布日期:2025 年 10 月 15 日

### 修复

- 段落范围选择有时无法正常工作
- 如果链接旁边有带链接的图片，链接弹窗不会显示
- 启动时工具栏的值有时与实际内容不一致

## 版本 2.0.3

发布日期:2025 年 8 月 27 日

### 修复

- 点击水平线时可能会抛出脚本错误
- 默认行高未正确设置
- 某些内容样式存在重复选择器
- 解析 HTML 时，纯文本块未能应用样式更改
- 解析器跳过了 HTML 中转义的字体名称
- 解析器忽略了 HTML 中的 `margin-left` 和 `line-height`

## 版本 2.0.2

发布日期:2025 年 8 月 4 日

### 修复

- 更新了包内容

## 版本 2.0.1

发布日期:2025 年 7 月 30 日

### 修复

- 更新了 `defaultStyles` 属性的类型定义

## 版本 2.0

发布日期:2025 年 7 月 30 日

:::note
v1.2 API 与 v2.0 不兼容。详情请参阅 [**迁移指南**](news/migration.md)。
:::

### 新功能

- **新一代文本渲染**  
  新引擎带来更流畅、更快、更精确的文本渲染

- **更细粒度的工具栏配置**  
  工具栏现在完全可自定义: 
  - 可选择[单独的工具栏控件](guides/configuration.md#default-toolbar-controls)并设置其顺序
  - 添加您自己的[自定义控件](guides/configuration.md#custom-toolbar-controls)

- **可选的 [menubar](api/config/menubar.md)**  
  可在编辑器顶部添加经典菜单风格界面

- **增强的 [文档模式](guides/configuration.md#layout-modes)**  
  现在支持不同的文档尺寸

- **图片支持**  
  - 通过[上传功能](api/config/image-upload-url.md)插入图片  
  - 可在编辑器内[调整图片大小](api/events/resize-image.md)  

- **改进的链接体验**  
  链接[弹窗交互](api/events/show-popup.md)已重新设计，更易于使用

- **新格式化工具**  
  - 文本对齐:**两端对齐**  
  - 插入[水平线](api/events/insert-line.md)  
  - [增加缩进](api/events/indent.md) / [减少缩进](api/events/outdent.md)  
  - 设置[行高](api/events/set-line-height.md)  
  - 使用 [subscript](api/events/subscript.md) / [superscript](api/events/superscript.md)

- **列表管理**  
  现在可以轻松[插入和管理列表](api/events/insert-list.md)

- **导入/导出与打印**  
  - [导入 DOCX](api/events/import.md) 文件
  - [导出](api/events/export.md) 为 DOCX 或 PDF
  - 可直接在编辑器内[打印](api/events/print.md)

- **键盘快捷键**  
  支持更多常用的格式化和编辑快捷键

### 新 API

#### 新属性

- [`fullscreenMode`](api/config/fullscreen-mode.md)  
- [`imageUploadUrl`](api/config/image-upload-url.md)  
- [`layoutMode`](api/config/layout-mode.md)  
- [`locale`](api/config/locale.md)  
- [`menubar`](api/config/menubar.md)  
- [`toolbar`](api/config/toolbar.md)  
- [`value`](api/config/value.md)

#### 新方法

- [`setConfig()`](api/methods/set-config.md) - 动态更新配置  
- [`setLocale()`](api/methods/set-locale.md) - 即时切换语言环境

#### 新内部方法

- [`api.exec()`](api/internal/exec.md)  
- [`api.intercept()`](api/internal/intercept.md)  
- [`api.getReactiveState()`](api/internal/get-reactive-state.md)  
- [`api.getState()`](api/internal/get-state.md)

#### 新事件

您可以在[这里](api/overview/events_overview.md)找到所有新事件的完整列表

### 已更新 API

#### 已更新属性

- [`defaultStyles`](api/config/default-styles.md)

#### 已更新方法

- [`setValue()`](api/methods/set-value.md)  
- [`getValue()`](api/methods/get-value.md)

#### 已更新内部方法

- [`api.detach()`](api/internal/detach.md)  
- [`api.on()`](api/internal/on.md)

## 已移除 API

:::warning
请勿在项目中使用已移除的 API！<br/> 详情请查阅 [迁移](news/migration.md) 主题。
:::

### [已移除属性](news/migration.md#properties-migration)

- [`customStats`](news/migration.md#--customstats)  
- [`mode`](news/migration.md#--mode--layoutmode)  
- [`toolbarBlocks`](news/migration.md#--toolbarblocks--toolbar)

### [已移除方法](news/migration.md#methods-migration)

- `exitFullScreen()`  
- `fullScreen()`  
- `getEditorAPI()`  
- `getStats()`  
- `paint()`

### 已移除内部方法

- [`events.fire()`](news/migration.md#--fire--use-exec-and-intercept)

### 已移除事件

- `Action`  
- `Change`  
- `selectionChange`  
- `selectionRefresh`
