---
sidebar_label: RichText 概述
title: RichText 概述
slug: /
description: 您可以在本文档中全面了解 DHTMLX JavaScript RichText 库。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版本。
---

# RichText 概述

**DHTMLX RichText** 是一款基于 JavaScript 构建的灵活、轻量级所见即所得编辑器。它专为在现代 Web 应用中提供流畅的编辑体验而设计，具备简洁的界面、丰富的格式化功能以及对内容渲染的完全控制。无论您是在构建 CMS、内部管理工具还是嵌入式文档编辑器，RichText 都可以轻松集成并按需定制。

**DHTMLX RichText** 组件包含以下功能：

- 两种[**布局模式**](api/config/layout-mode.md)

- 支持将内容序列化为纯文本和 HTML 格式

- 可配置的[**工具栏**](api/config/toolbar.md)，支持内置按钮和自定义按钮

- 静态[**菜单栏**](api/config/menubar.md)，可显示或隐藏

- 图片上传、富文本格式化、自定义样式及全屏模式

- [完整的 API 访问](api/overview/main_overview.md)，支持[事件处理](api/overview/event_bus_methods_overview.md)、[内容操作](api/overview/methods_overview.md)和[响应式状态管理](api/overview/state_methods_overview.md)

RichText 与框架无关，可轻松与 [React](guides/integration_with_react.md)、[Angular](guides/integration_with_angular.md)、[Vue](guides/integration_with_vue.md) 和 [Svelte](guides/integration_with_svelte.md) 等框架集成，适用于各种前端生态系统。

本文档提供了安装、配置、使用和定制的详细指南。您将找到常见场景示例、[完整的 API 参考](api/overview/main_overview.md)以及将 RichText 嵌入应用程序的最佳实践。

## RichText 结构

### 菜单栏

RichText 菜单栏提供对编辑操作的访问，例如新建文档、打印、导入/导出内容等。默认情况下，菜单栏处于隐藏状态。

使用 [`menubar`](api/config/menubar.md) 属性可切换其可见性。虽然可以启用或禁用菜单栏，但目前其内容不支持自定义配置。

<div className="img_border">
![Menubar](./assets/richtext/menubar.png)
</div>

### 工具栏

RichText 工具栏提供对文本格式化和结构编辑功能的快速访问。默认情况下，[工具栏](api/config/toolbar.md#default-config)处于启用状态，并显示一组预定义的常用控件，例如粗体、斜体、字体设置、列表格式化等。

[`toolbar`](api/config/toolbar.md) 属性允许您完全自定义工具栏的内容和布局。您可以启用或禁用工具栏、重新排列默认控件，或使用预定义按钮标识符数组和自定义按钮对象来定义完全自定义的工具栏。

<div className="img_border">
![Toolbar](./assets/richtext/toolbar.png)
</div>

### 编辑器

RichText 编辑器是用户创建和格式化内容的核心区域。您可以通过 [`value`](api/config/value.md)、[`layoutMode`](api/config/layout-mode.md) 和 [`defaultStyles`](api/config/default-styles.md) 等配置选项控制编辑器的外观和行为。RichText 还支持自定义样式、图片嵌入以及响应式布局调整，以满足应用程序的需求。

#### 两种工作模式

DHTMLX RichText 支持以"经典"和"文档"两种模式处理内容。您可以选择最适合自己编辑习惯的模式。使用 [`layoutMode`](api/config/layout-mode.md) 属性可以以编程方式切换模式。

- **"classic"**

<div className="img_border">
![Classic mode](./assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Document mode](./assets/richtext/document_mode.png)
</div>

## 支持的格式

RichText 编辑器支持 **HTML** 和纯文本格式的[解析](api/methods/set-value.md)与[序列化](api/methods/get-value.md)。

#### HTML 格式

<div className="img_border">
![HTML format](./assets/richtext/html_format.png)
</div>

#### 文本格式

<div className="img_border">
![Text format](./assets/richtext/text_format.png)
</div>

## 键盘快捷键

RichText 编辑器支持一组常用键盘快捷键，用于快速格式化和编辑。快捷键遵循平台惯例，在 **Windows/Linux**（`Ctrl`）和 **macOS**（`⌘`）上均可使用。

### 文本格式化

| 操作            | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| 粗体*           | `Ctrl+B`        | `⌘B`          |
| 斜体            | `Ctrl+I`        | `⌘I`          |
| 下划线          | `Ctrl+U`        | `⌘U`          |
| 删除线          | `Ctrl+Shift+X`  | `⌘⇧X`         |

### 编辑

| 操作     | Windows/Linux            | macOS         |
|----------|--------------------------|---------------|
| 撤销     | `Ctrl+Z`                 | `⌘Z`          |
| 重做     | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| 剪切     | `Ctrl+X`                 | `⌘X`          |
| 复制     | `Ctrl+C`                 | `⌘C`          |
| 粘贴     | `Ctrl+V`                 | `⌘V`          |

### 特殊操作

| 操作         | Windows/Linux | macOS |
|--------------|---------------|-------|
| 插入链接     | `Ctrl+K`      | `⌘K`  |
| 打印         | `Ctrl+P`      | `⌘P`  |

:::info
未来更新中可能会引入更多快捷键。
:::

要获取与 RichText 键盘快捷键相关的实际参考，请按 **Help** 并选择 **Keyboard shortcuts** 选项：

<div className="img_border">
![Keyboard shortcuts](./assets/richtext/shortcut_reference.png)
</div>
