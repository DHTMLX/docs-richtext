---
sidebar_label: toolbar
title: toolbar Config
description: You can learn about the toolbar config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# toolbar

### Description

@short: Optional. Enables toolbar and allows users to specify/configure buttons displayed within toolbar

### Usage

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Available buttons within Toolbar

You can specify the following buttons in the RichText toolbar:

| Button              | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Reverts the most recent user action.                                        |
| `redo`              | Reapplies the previously undone action.                                     |
| `style`             | Allows selection of text styles (e.g., headings, paragraph, etc.).          |
| `font-family`       | Changes the font of the selected text.                                      |
| `font-size`         | Adjusts the size of the selected text.                                      |
| `bold`              | Applies bold formatting to the selected text.                               |
| `italic`            | Applies italic formatting to the selected text.                             |
| `underline`         | Underlines the selected text.                                               |
| `strike`            | Applies strikethrough formatting.                                           |
| `subscript`         | Formats the text as subscript.                                              |
| `superscript`       | Formats the text as superscript.                                            |
| `text-color`        | Changes the text color.                                                     |
| `background-color`  | Changes the background (highlight) color of the text.                       |
| `align`             | Sets text alignment (left, center, right, justified).                       |
| `indent`            | Increases text block indentation.                                           |
| `outdent`           | Decreases paragraph indentation.                                            |
| `line-height`       | Adjusts the line spacing (line height).                                     |
| `quote`             | Formats the text as a blockquote.                                           |
| `bulleted-list`     | Creates a bulleted list.                                                    |
| `numbered-list`     | Creates a numbered list.                                                    |
| `link`              | Inserts a hyperlink.                                                        |
| `image`             | Inserts an image.                                                           |
| `line`              | Inserts a horizontal line.                                                  |
| `clear`             | Removes all formatting from the selected text.                              |
| `print`             | Opens the print dialog.                                                     |
| `fullscreen`        | Toggles fullscreen mode.                                                    |
| `mode`              | switches between [layout modes](api/config/layout-mode.md) (classic/document)|
| `shortcuts`         | Displays a list of available keyboard shortcuts.                            |
| `separator`         | Adds a visual separator between toolbar groups.                             |

You can use these strings to configure toolbar buttons as follows:

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // other buttons
    ],
    // other configuration properties
});
~~~

#### Custom buttons within Toolbar

You can specify custom buttons as objects with the following parameters:

- `type` - (required) specifies a custom control type. The following types are available: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (optional) a custom control ID (cannot overlap with existing control ID)
- `label` - (optional) a button label (combines with icon)
- `tooltip` - (optional) a tooltip displayed on hover (if not specified, uses the value from "label")
- `css` - (optional) a css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
- `handler` - (optional) a callback function that executes when the button is clicked

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // buttons (strings represent buttons only)
        "bold",
        "italic",
        // predefined buttons (user cannot define any other options for these (no labels, tooltips, options, etc.), so only ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // user must specify the correct type if they want to use a predefined control (e.g. richselect/colorpicker)
        // non-matching types will be ignored (not added to the toolbar)
        {
            type: "richselect", // type: "button" - incorrect, will be ignored
            id: "mode",
        },
        // custom buttons (supported options are below)
        // user can only define custom buttons (no richselect/colorpicker support atm)
        {
            type: "button",
            id: "some",
            label: "Some",
            handler: () => {/* custom logic */}
        },
        {
            type: "button",
            id: "other",
            icon: "wxo-help",
            label: "Other",
            tooltip: "Some tooltip",
            handler: () => {/* custom logic */}
        }
    ],
    // other configuration properties
});
~~~

#### Hide Toolbar

If you need to hide toolbar, set the `toolbar` property to `false` as follows:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // other configuration properties
});
~~~

### Default config

~~~jsx
const defaultToolbarButtons = {
    "undo",
    "redo",
    "separator",
    "style",
    "separator",
    "font-family",
    "font-size",
    "separator",
    "bold",
    "italic",
    "underline",
    "strike",
    "separator",
    "text-color",
    "background-color",
    "separator",
    "align",
    "line-height",
    "outdent",
    "indent",
    "separator",
    "bulleted-list",
    "numbered-list",
    "quote",
    "separator",
    "link",
    "image",
    "separator",
    "clear",
    "separator",
    "fullscreen",
    "mode"
};
~~~

:::tip
Default toolbar controls are exported by the RichText widget and can be accessed via `richtext.defaultToolbarButtons`.

```jsx{4}
// initialize RichText
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // button id (cannot overlap with existing button ids if you want to apply custom logic)
            icon: "wxo-help", // button icon (combines with label)
            css: "rounded", // css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label (combines with icon)
            tooltip: "Some tooltip", // tooltip displayed on hover (if not specified, uses the value from "label")
        }
    ]
    // other configuration properties
});
```
:::

### Example

~~~jsx {3-18}
// initialize RichText
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // custom buttons (all supported options are used below)
        // user can only define custom buttons (no richselect/colorpicker support at the moment)
        {
            type: "button",
            id: "btn1", // button id (cannot overlap with existing button ids if you want to apply custom logic)
            icon: "wxo-help", // button icon (combines with label)
            css: "rounded", // css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label (combines with icon)
            tooltip: "Some tooltip", // tooltip displayed on hover (if not specified, uses the value from "label")
            handler: () => ..., // custom logic attached to this button
        }
    ]
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)
