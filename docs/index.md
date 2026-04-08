---
sidebar_label: RichText overview
title: RichText overview
slug: /
description: You can have an overview of DHTMLX JavaScript RichText library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# RichText overview

**DHTMLX RichText** is a flexible and lightweight WYSIWYG editor built with JavaScript. It provides a clean UI, rich formatting capabilities, and full control over content rendering — suitable for CMS platforms, internal admin tools, and embedded document editors.

**DHTMLX RichText** component includes the following features:

- Two [layout modes](api/config/layout-mode.md): `"classic"` and `"document"`

- Content serialization to both plain text and HTML

- Configurable [`toolbar`](api/config/toolbar.md) with built-in and custom buttons

- Static [`menubar`](api/config/menubar.md) that you can show or hide

- Image uploading via [`imageUploadUrl`](api/config/image-upload-url.md), rich formatting, custom styling via [`defaultStyles`](api/config/default-styles.md), and fullscreen mode via [`fullscreenMode`](api/config/fullscreen-mode.md)

- Localization through the [`locale`](api/config/locale.md) property and [`setLocale()`](api/methods/set-locale.md) method

- [Full API access](api/overview/main_overview.md) for [event handling](api/overview/event_bus_methods_overview.md), [content manipulation](api/overview/methods_overview.md), and [reactive state management](api/overview/state_methods_overview.md)

RichText is framework-agnostic and integrates with [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md), and [Svelte](guides/integration_with_svelte.md), making it suitable for a wide range of front-end ecosystems.

This documentation provides detailed guidance on installation, configuration, usage, and customization. It includes examples for common scenarios, [full API references](api/overview/main_overview.md), and best practices for embedding RichText into your application.

## RichText structure

### Menubar

The RichText menubar provides access to editing actions such as creating a new document, printing, importing/exporting content, and more. It is hidden by default.

Use the [`menubar`](api/config/menubar.md) property to toggle its visibility. You can show or hide the menubar, but its contents are not configurable at this time.

<div className="img_border">
![Menubar](./assets/richtext/menubar.png)
</div>

### Toolbar

The RichText toolbar provides quick access to text formatting and structural editing features. By default, the [toolbar](api/config/toolbar.md#default-config) is enabled and displays a predefined set of commonly used controls such as bold, italic, font settings, list formatting, and more.

Use the [`toolbar`](api/config/toolbar.md) property to customize the toolbar’s content and layout. You can enable or disable the toolbar, rearrange default controls, or define a fully custom toolbar using an array of predefined button identifiers and custom button objects.

<div className="img_border">
![Toolbar](./assets/richtext/toolbar.png)
</div>

### Editor

The RichText editor is the central area where users create and format content. You can control the editor’s appearance and behavior through configuration options such as [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md), and [`defaultStyles`](api/config/default-styles.md). RichText also supports custom styling, image embedding, and responsive layout adjustments to match the needs of your application.

#### Layout modes

DHTMLX RichText works with content in `"classic"` and `"document"` modes. Choose the mode that best suits your editing workflow. Use the [`layoutMode`](api/config/layout-mode.md) property to switch modes programmatically.

- **"classic"**

<div className="img_border">
![Classic mode](./assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Document mode](./assets/richtext/document_mode.png)
</div>

## Supported formats

The RichText editor supports [parsing](api/methods/set-value.md) and [serialization](api/methods/get-value.md) of content in HTML and plain text formats.

### HTML format

<div className="img_border">
![HTML format](./assets/richtext/html_format.png)
</div>

### Text format

<div className="img_border">
![Text format](./assets/richtext/text_format.png)
</div>

## Keyboard shortcuts

The RichText editor supports a set of common keyboard shortcuts for faster formatting and editing. The shortcuts follow platform conventions and are available on both **Windows/Linux** (`Ctrl`) and **macOS** (`⌘`).

### Text formatting

| Action          | Windows/Linux   | macOS         |
|-----------------|-----------------|---------------|
| Bold*           | `Ctrl+B`        | `⌘B`          |
| Italic          | `Ctrl+I`        | `⌘I`          |
| Underline       | `Ctrl+U`        | `⌘U`          |
| Strikethrough   | `Ctrl+Shift+X`  | `⌘⇧X`         |

### Editing

| Action   | Windows/Linux            | macOS         |
|----------|--------------------------|---------------|
| Undo     | `Ctrl+Z`                 | `⌘Z`          |
| Redo     | `Ctrl+Y` / `Ctrl+Shift+Z`| `⌘Y` / `⌘⇧Z`  |
| Cut      | `Ctrl+X`                 | `⌘X`          |
| Copy     | `Ctrl+C`                 | `⌘C`          |
| Paste    | `Ctrl+V`                 | `⌘V`          |

### Special actions

| Action       | Windows/Linux | macOS |
|--------------|---------------|-------|
| Insert link  | `Ctrl+K`      | `⌘K`  |
| Print        | `Ctrl+P`      | `⌘P`  |

:::info
More shortcuts may be introduced in future updates.
:::

For a full list of keyboard shortcuts, press **Help** and select **Keyboard shortcuts**:

<div className="img_border">
![Keyboard shortcuts](./assets/richtext/shortcut_reference.png)
</div>
