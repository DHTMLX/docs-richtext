---
sidebar_label: RichText overview
title: RichText overview
slug: /
description: You can have an overview of DHTMLX JavaScript RichText library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# RichText overview

**DHTMLX RichText** is a lightweight and flexible WYSIWYG editor made with JavaScript. It's designed to make editing easy in modern web apps, with a simple interface, plenty of formatting tools, and full control over how content is displayed. Whether it's for a CMS, an admin dashboard, or an embedded doc editor, RichText can be added and adjusted to fit different projects.

**DHTMLX RichText** comes with these features:

- Two [**layout modes**](api/config/layout-mode.md)

- Content can be saved as plain text or HTML

- A [**toolbar**](api/config/toolbar.md) that can be configured with built-in and custom buttons

- A [**menubar**](api/config/menubar.md) that's static and can be shown or hidden

- Support for image uploads, rich formatting, custom styles, and fullscreen editing

- [Full API access](api/overview/main_overview.md) for [event handling](api/overview/event_bus_methods_overview.md), [content changes](api/overview/methods_overview.md), and [reactive state management](api/overview/state_methods_overview.md)

RichText works with any framework and can be used with [React](guides/integration_with_react.md), [Angular](guides/integration_with_angular.md), [Vue](guides/integration_with_vue.md), or [Svelte](guides/integration_with_svelte.md), so it fits into all sorts of front-end setups.

This documentation covers installation, setup, usage, and how to tweak things. There are examples for common tasks, [full API docs](api/overview/main_overview.md), and tips for adding RichText to different apps.

## RichText structure

### Menubar

The RichText menubar gives quick access to editing actions like making a new document, printing, importing or exporting, and more. By default, it's hidden.

The [`menubar`](api/config/menubar.md) property controls if it's visible or not. You can turn the menubar on or off, but right now, its items can't be changed.

import menubar from '@site/static/img/richtext/menubar.png';

<img
  src={menubar}
  alt="Menubar"
  className="img_border"
/>

### Toolbar

The RichText toolbar lets users quickly format text and edit structure. By default, the [toolbar](api/config/toolbar.md#default-config) is on and shows a set of common controls like bold, italic, font settings, lists, and more.

The [`toolbar`](api/config/toolbar.md) property lets you change which controls show up and how they're arranged. You can turn the toolbar on or off, rearrange the default buttons, or create your own setup with built-in and custom buttons.

import toolbar from '@site/static/img/richtext/toolbar.png';

<img
  src={toolbar}
  alt="Toolbar"
  className="img_border"
/>

### Editor

The main part of RichText is the editor, where all content is created and formatted. You can change how the editor looks and works using options like [`value`](api/config/value.md), [`layoutMode`](api/config/layout-mode.md), and [`defaultStyles`](api/config/default-styles.md). RichText allows for custom styles, adding images, and making the layout adjust to different screens and needs.

#### Two working modes

DHTMLX RichText has two ways to show content: "classic" and "document" modes. Pick the one that feels best for your editing style. Switch between them using the [`layoutMode`](api/config/layout-mode.md) property.

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

## Supported formats

RichText can [read](api/methods/set-value.md) and [save](api/methods/get-value.md) content as either **HTML** or plain text.

#### HTML format

import html_format from '@site/static/img/richtext/html_format.png';

<img
  src={html_format}
  alt="HTML format"
  className="img_border"
/>

#### Text format

import text_format from '@site/static/img/richtext/text_format.png';

<img
  src={text_format}
  alt="Text format"
  className="img_border"
/>

## Keyboard shortcuts

RichText supports a bunch of standard keyboard shortcuts for faster editing and formatting. The shortcuts match what's common on each platform and work on both **Windows/Linux** (`Ctrl`) and **macOS** (`⌘`).

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
More shortcuts could be added in future updates.
:::

For a full list of RichText keyboard shortcuts, just click **Help** and choose **Keyboard shortcuts**:

import shortcut_reference from '@site/static/img/richtext/shortcut_reference.png';

<img
  src={shortcut_reference}
  alt="Shortcut reference"
  className="img_border"
/>
