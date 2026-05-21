---
sidebar_label: RichText overview
title: RichText overview
slug: /
description: You can have an overview of DHTMLX JavaScript RichText library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# RichText overview

**DHTMLX RichText** is a flexible and lightweight WYSIWYG editor built with JavaScript. Designed to provide a seamless editing experience in modern web applications, RichText offers a clean UI, rich formatting capabilities, and full control over content rendering. Whether you're building a CMS, an internal admin tool, or an embedded document editor, RichText can be easily integrated and customized to match your needs.

**DHTMLX RichText** component includes the following features:

- Two [**layout modes**](api/config/layout-mode.md)

- Content serialization to HTML, plain text, and Markdown

- Configurable [**toolbar**](api/config/toolbar.md) with built-in and custom buttons

- Static [**menubar**](api/config/menubar.md) that can be shown or hidden

- Image uploading, rich formatting, custom styling, and full screen mode

- [Full API access](api/overview/main_overview.md) for [event handling](api/overview/event_bus_methods_overview.md), [content manipulation](api/overview/methods_overview.md), and [reactive state management](api/overview/state_methods_overview.md)

RichText is framework-agnostic and can be easily integrated with [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md), and [Svelte](guides/integration_with_svelte.md) frameworks, making it suitable for a wide range of front-end ecosystems.

This documentation provides detailed guidance on installation, configuration, usage, and customization. You'll find examples for common scenarios, [full API references](api/overview/main_overview.md), and best practices for embedding RichText into your application.

## RichText structure

### Menubar

The RichText menubar provides access to editing actions such as creating a new document, printing, importing/exporting content, and more. It is hidden by default.

Use the [`menubar`](api/config/menubar.md) property to toggle its visibility. While the menubar can be enabled or disabled, its contents are not configurable at this time.

<div className="img_border">
![Menubar](./assets/richtext/menubar.png)
</div>

### Toolbar

The RichText toolbar provides quick access to text formatting and structural editing features. By default, the [toolbar](api/config/toolbar.md#default-config) is enabled and displays a predefined set of commonly used controls such as bold, italic, font settings, list formatting, and more.

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

The RichText editor supports [parsing](api/methods/set-value.md) and [serialization](api/methods/get-value.md) of content in the **HTML**, **plain text**, and **Markdown** formats.

#### HTML format

<div className="img_border">
![HTML format](./assets/richtext/html_format.png)
</div>

#### Text format

<div className="img_border">
![Text format](./assets/richtext/text_format.png)
</div>

#### Markdown format

Pass the built-in `markdown` encoders to [`setValue()`](api/methods/set-value.md) / [`getValue()`](api/methods/get-value.md) to load or serialize content as Markdown:

~~~jsx
const editor = new richtext.Richtext("#root", {
    value: "# Hello\n\nSome **bold** text",
});

// load Markdown into the editor
editor.setValue("# Title\n\nParagraph", richtext.markdown.fromMarkdown);

// read editor content as Markdown
const md = editor.getValue(richtext.markdown.toMarkdown);
~~~

:::note
Markdown support covers a limited subset of the syntax — common block and inline elements such as headings, paragraphs, line breaks, emphasis, blockquotes, lists, and links. Formatting that has no Markdown equivalent (font family, font size, colors, alignment, line height) is dropped on serialization.
:::

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

To get actual reference related to RichText keyboard shortcuts, press **Help** and select the **Keyboard shortcuts** option:

<div className="img_border">
![Keyboard shortcuts](./assets/richtext/shortcut_reference.png)
</div>
