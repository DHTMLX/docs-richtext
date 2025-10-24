---
sidebar_label: RichText 概述
title: RichText 概述
slug: /
description: 您可以在文档中了解 DHTMLX JavaScript RichText 库的概览。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费评估版。
---

# RichText 概述

**DHTMLX RichText** 是一个轻量且灵活的 JavaScript WYSIWYG 编辑器。它旨在为现代 Web 应用提供简洁的编辑体验，拥有直观的界面、丰富的格式化工具，并可完全控制内容的展示方式。无论是用于 CMS、管理后台还是嵌入式文档编辑器，RichText 都可以灵活集成并适配不同项目需求。

**DHTMLX RichText** 具备以下特性:

- 两种[**布局模式**](api/config/layout-mode.md)

- 内容可保存为纯文本或 HTML

- 可配置的[**工具栏**](api/config/toolbar.md)，支持内置及自定义按钮

- 可显示或隐藏的[**菜单栏**](api/config/menubar.md)，为静态展示

- 支持图片上传、丰富格式化、自定义样式及全屏编辑

- 提供[完整 API](api/overview/main_overview.md)，支持[事件处理](api/overview/event_bus_methods_overview.md)、[内容变更](api/overview/methods_overview.md)和[响应式状态管理](api/overview/state_methods_overview.md)

RichText 可与任何框架搭配使用，包括 [React](guides/integration_with_react.md)、[Angular](guides/integration_with_angular.md)、[Vue](guides/integration_with_vue.md) 或 [Svelte](guides/integration_with_svelte.md)，适用于各种前端开发环境。

本手册涵盖安装、配置、使用以及个性化调整。您可以参考常见任务示例、[完整 API 文档](api/overview/main_overview.md)，并获取将 RichText 集成到不同应用的建议。

## RichText 结构

### 菜单栏

RichText 的菜单栏可便捷访问新建文档、打印、导入导出等编辑操作。默认情况下，菜单栏是隐藏的。

通过 [`menubar`](api/config/menubar.md) 属性可以控制菜单栏的显示与否。您可以开启或关闭菜单栏，但目前无法自定义菜单项。

import menubar from '@site/static/img/richtext/menubar.png';

<img
  src={menubar}
  alt="Menubar"
  className="img_border"
/>

### 工具栏

RichText 的工具栏让用户能够快速进行文本格式化和结构编辑。默认情况下，[工具栏](api/config/toolbar.md#默认配置)是开启的，并显示如加粗、斜体、字体设置、列表等常用控件。

通过 [`toolbar`](api/config/toolbar.md) 属性，您可以自定义显示哪些控件及其排列顺序。可以开启或关闭工具栏、重新排列默认按钮，或结合内置与自定义按钮设计专属工具栏。

import toolbar from '@site/static/img/richtext/toolbar.png';

<img
  src={toolbar}
  alt="Toolbar"
  className="img_border"
/>

### 编辑区

RichText 的核心部分是编辑器本身，所有内容的创建与格式化都在此完成。您可以通过 [`value`](api/config/value.md)、[`layoutMode`](api/config/layout-mode.md) 和 [`defaultStyles`](api/config/default-styles.md) 等选项调整编辑器的外观和行为。RichText 支持自定义样式、图片插入，以及适应不同屏幕和需求的布局调整。

#### 两种工作模式

DHTMLX RichText 提供 "classic" 和 "document" 两种内容展示方式。您可根据编辑习惯选择合适模式，并通过 [`layoutMode`](api/config/layout-mode.md) 属性进行切换。

- **"classic"**

import classic_mode from '@site/static/img/richtext/classic_mode.png';

<img
  src={classic_mode}
  alt="Classic mode"
  className="img_border"
/>

- **"document"**

import document_mode from '@site/static/img/richtext/document_mode.png';

<img
  src={document_mode}
  alt="Document mode"
  className="img_border"
/>

## 支持的格式

RichText 可将内容[读取](api/methods/set-value.md)和[保存](api/methods/get-value.md)为 **HTML** 或纯文本格式。

#### HTML 格式

import html_format from '@site/static/img/richtext/html_format.png';

<img
  src={html_format}
  alt="HTML format"
  className="img_border"
/>

#### 纯文本格式

import text_format from '@site/static/img/richtext/text_format.png';

<img
  src={text_format}
  alt="Text format"
  className="img_border"
/>

## 快捷键支持

RichText 支持多种常用快捷键，帮助提升编辑与格式化效率。快捷键遵循各平台的常规习惯，适用于 **Windows/Linux**（`Ctrl`）和 **macOS**（`⌘`）。

### 文本格式化

| 操作          | Windows/Linux   | macOS         |
|---------------|-----------------|---------------|
| 加粗*         | `Ctrl+B`        | `⌘B`          |
| 斜体          | `Ctrl+I`        | `⌘I`          |
| 下划线        | `Ctrl+U`        | `⌘U`          |
| 删除线        | `Ctrl+Shift+X`  | `⌘⇧X`         |

### 编辑操作

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
未来版本可能会新增更多快捷键。
:::

如需查看 RichText 全部快捷键，只需点击 **帮助**，选择 **快捷键**:

import shortcut_reference from '@site/static/img/richtext/shortcut_reference.png';

<img
  src={shortcut_reference}
  alt="Shortcut reference"
  className="img_border"
/>
