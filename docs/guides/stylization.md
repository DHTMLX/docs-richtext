---
title: Styling
sidebar_label: Styling
description: You can learn about the styling in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Styling

DHTMLX RichText can be styled to fit any look by using CSS variables or targeting specific widget parts with custom styles.

Here's a quick walkthrough for setting up a **dark theme** and using class names to style different parts of the editor, like the menubar, toolbar, popup, and content area.

## Default structure and class names

RichText relies on these main classes for its UI layout:

| Class name             | Description                                 |
|------------------------|---------------------------------------------|
| `.wx-richtext`         | Root container of the RichText widget       |
| `.wx-richtext-menubar` | Container for menubar                       |
| `.wx-richtext-menu`    | Container for menubar dropdown  menu        |
| `.wx-richtext-toolbar` | Container for toolbar                       |
| `.wx-editor-area`      | Container for main editable content area    |

These classes can be used in your CSS to tweak how the RichText editor looks.

## Overriding default styles

To give RichText a custom look, just update the CSS variables on the `#root` container or on specific sub-elements:

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
This setup gives the editor a dark background, updates button and icon colors, and makes things easier to see in a dark UI.
:::

## List of supported CSS variables

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

* The `color-scheme: dark` property helps native inputs look right in dark mode
* It’s best not to change layout-related CSS properties (like `display` or `position`) unless there's a good reason

## Live demo

Here's a quick example showing how custom styles can be added to RichText:

<iframe src="https://snippet.dhtmlx.com/q8j4qqq9?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related articles:** [Customization](guides/configuration.md)
