---
sidebar_label: RichText overview
title: RichText overview
slug: /
description: You can have an overview of DHTMLX JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# RichText overview

**DHTMLX RichText** is a flexible and lightweight WYSIWYG editor built with JavaScript. Designed to provide a seamless editing experience in modern web applications, RichText offers a clean UI, rich formatting capabilities, and full control over content rendering. Whether you're building a CMS, an internal admin tool, or an embedded document editor, RichText can be easily integrated and customized to match your needs.

**DHTMLX RichText** component includes the following features:

- Multiple [**layout modes**](api/config/layout-mode.md), including visual and source view

- Content serialization to both HTML and JSON

- Configurable [**toolbar**](api/config/toolbar.md) with built-in and custom buttons

- Static [**menubar**](api/config/menubar.md) that can be shown or hidden

- Image uploading, rich formatting, custom styling, and full screen mode

- [Full API access](/category/api/) for [event handling](/event-bus-methods/), [content manipulation](/category/richtext-methods/), and [reactive state management](/category/state-methods/)

RichText is framework-agnostic and provides official wrappers for [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md), and [Svelte](guides/integration_with_svelte.md), making it suitable for a wide range of front-end ecosystems.

This documentation provides detailed guidance on installation, configuration, usage, and customization. You'll find examples for common scenarios, [full API references](/category/api/), and best practices for embedding RichText into your application.

## RichText structure

### Menubar

The RichText menubar provides access to high-level editing actions such as creating a new document, printing, importing/exporting content, and more. It is hidden by default.

Use the [`menubar`](api/config/menubar.md) property to toggle its visibility. While the menubar can be enabled or disabled, its contents are not configurable at this time.

<div className="img_border">
![Menubar](./assets/richtext/menubar.png)
</div>

### Toolbar

The RichText toolbar provides quick access to text formatting and structural editing features. By default, it is enabled and displays a predefined set of commonly used controls such as bold, italic, font settings, and list formatting.

The [`toolbar`](api/config/toolbar.md) property allows you to fully customize the toolbar’s content and layout. You can enable or disable toolbar, rearrange default controls, or define a fully custom toolbar using an array of predefined button identifiers and custom button objects.

<div className="img_border">
![Toolbar](./assets/richtext/toolbar.png)
</div>

### Editor

The RichText editor is the central area where users create and format content. You can control the editor’s appearance and behavior through configuration options such as [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md), and [`defaultStyles`](api/config/default-styles.md). RichText also supports custom styling, image embedding, and responsive layout adjustments to match the needs of your application.

#### Two working modes

DHTMLX RichText can work with content in "classic" and "document" modes. You can choose the most suitable mode to feel comfortable while editing text. Use the [`layoutMode`](api/config/layout-mode.md) property to switch modes programatically.

- **"classic"**

<div className="img_border">
![Classic mode](./assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Document mode](./assets/richtext/document_mode.png)
</div>

## Supported formats

The RichText editor supports [parsing](api/methods/set-value.md) and [serialization](api/methods/get-value.md) of content in the **HTML** and **Markdown** formats.

#### HTML format

<div className="img_border">
![HTML format](./assets/richtext/html_format.png)
</div>

#### Text format

<div className="img_border">
![Text format](./assets/richtext/text_format.png)
</div>
