---
sidebar_label: toolbar
title: toolbar Config
description: You can learn about the toolbar config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# toolbar

### Description

@short: Optional. Shows or hides Toolbar and specifies buttons visible within Toolbar

### Usage

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Available buttons within Toolbar

You can specify the following buttons in the Richtext Toolbar:

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
| `indent`            | Increases paragraph indentation.                                            |
| `outdent`           | Decreases paragraph indentation.                                            |
| `line-height`       | Adjusts the line spacing (line height).                                     |
| `quote`             | Formats the text as a blockquote.                                           |
| `bulleted-list`     | Creates a bulleted list.                                                    |
| `numbered-list`     | Creates a numbered list.                                                    |
| `link`              | Inserts or edits a hyperlink.                                               |
| `image`             | Inserts an image.                                                           |
| `line`              | Inserts a horizontal line.                                                  |
| `clear`             | Removes all formatting from the selected text.                              |
| `print`             | Opens the print dialog.                                                     |
| `fullscreen`        | Toggles fullscreen mode.                                                    |
| `mode`              | Switches between different view modes (e.g., visual, HTML, Markdown).       |
| `shortcuts`         | Displays a list of available keyboard shortcuts.                            |
| `separator`         | Adds a visual separator between Toolbar groups.                             |

You can use this strings to configure Toolbar buttons as follow:

~~~jsx {2-7}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        // other buttons
    ],
    // other parameters
});
~~~

#### Custom buttons within Toolbar

You can specify custom buttons as objects with the following parameters:

- `id` - (required) a custom button ID (cannot overlap with existing button ids if you want to apply custom logic)
- `type` - (required) specifies the button type. Use `"button"` for a simple clickable button. Other types are unavailable at the moment
- `label` - (optional) a button label (combines with icon)
- `tooltip` - (optional) a tooltip displayed on hover (if not specified, uses the value from "label")
- `css` - (optional) a css class name assigned to the control (default supported classes: wx-primary, wx-secondary)
- `handler` - (optional) a callback function that executes when the button is clicked

You can specify custom buttons within a Toolbar as follow:

~~~jsx {6-14}
new richtext.Richtext("#root", {
    toolbar: [
        "bold",
        "italic",
        "separator",
        {
            type: "button",
            id: "btn1",
            icon: "wxo-help",
            css: "rounded",
            label: "Custom button", 
            tooltip: "Some tooltip", 
            handler: () => ..., 
        },
        // other custom buttons
    ],
    // other parameters
});
~~~

#### Hide Toolbar

If you need to hide Toolbar, set the `toolbar` property to `false` as follows:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false
    // other parameters
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

### Example

~~~jsx {4}
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
    // other parameters
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih)
