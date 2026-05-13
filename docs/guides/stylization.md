---
title: Styling
sidebar_label: Styling
description: You can learn about the styling in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Styling

You can fully customize the appearance of DHTMLX RichText by overriding CSS variables and applying custom styles to specific parts of the widget.

This guide shows how to apply a **dark theme** and use the CSS class names to style the editor's menubar, toolbar, popup, and content area.

## Default structure and class names

RichText uses the following core classes to structure the UI:

| Class name             | Description                                 |
|------------------------|---------------------------------------------|
| `.wx-richtext`         | Root container of the RichText widget       |
| `.wx-richtext-menubar` | Container for menubar                       |
| `.wx-richtext-menu`    | Container for the menubar dropdown menu     |
| `.wx-richtext-toolbar` | Container for toolbar                       |
| `.wx-editor-area`      | Container for main editable content area    |

Use these classes in custom CSS selectors to override the editor's appearance.

## Override default styles

To override the default styles, redefine CSS variables on the `#root` container or on specific sub-elements:

```html
<div id="root" style="width: 100%; height: 100%;"></div>

<style>
  #root,
  .wx-richtext-menu {
    --wx-background: #404151;
    --wx-background-alt: #212329;
    --wx-color-primary: #14B195;
    --wx-color-font: #FFFFFF;
    --wx-border: 1px solid #6B6C79;
    --wx-color-secondary-hover: rgba(20, 177, 149, 0.12);
    --wx-button-active: rgba(20, 177, 149, 0.22);
    --wx-icon-color: var(--wx-color-font);
    --wx-color-font-alt: #9FA1AE;
    --wx-color-font-disabled: #9FA1AE;
    --wx-popup-border: var(--wx-border);

    color-scheme: dark;
  }

  .wx-richtext-menu {
    border: var(--wx-border);
  }
</style>
```

:::note
These styles apply a dark background, adjust button and icon colors, and improve visibility for dark UI themes.
:::

## Supported CSS variables

| Variable name                | Description                          |
| ---------------------------- | ------------------------------------ |
| `--wx-background`            | Background color of editor and popup |
| `--wx-background-alt`        | Alternate background for menubar     |
| `--wx-color-primary`         | Accent color for links, blockquotes, and borders of resizing pictures |
| `--wx-color-font`            | Main font color (for editor, menubar, and toolbar)|
| `--wx-color-font-alt`        | Alternate font color                 |
| `--wx-color-font-disabled`   | Disabled text color (for menubar and toolbar elements)|
| `--wx-border`                | Border style used across the editor  |
| `--wx-color-secondary-hover` | Hover state background for buttons within menubar and toolbar  |
| `--wx-button-active`         | Active state background for buttons within menubar and toolbar |
| `--wx-icon-color`            | Color for toolbar arrow icons used for dropdown          |
| `--wx-popup-border`          | Border for popup elements            |

## Best practices

* Use `color-scheme: dark` to improve native input styling in dark mode
* Avoid changing layout-related properties (like `display`, `position`) without a strong reason

:::tip
For per-tag typography (font family, size, foreground and background per `h1`/`p`/`blockquote`/etc.), use the [`defaultStyles`](api/config/default-styles.md) configuration property together with matching CSS rules. See the [Configuration guide](guides/configuration.md#default-styles) for the full pattern.
:::

## Live demo

The example below applies a custom style to RichText:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related articles:** [Configuration](guides/configuration.md)
