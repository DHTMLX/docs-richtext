---
sidebar_label: toolbar
title: toolbar Config
description: Explore the toolbar configuration in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code examples and live demos, and get a free 30-day trial of DHTMLX RichText.
---

# toolbar

### Description

@short: Optional. Turns on the toolbar and lets users choose and set up the buttons shown on it.

### Usage

~~~jsx {}
toolbar?: boolean | Array<string | { id: string, type: string, label?: string, tooltip?: string, css?: string, handler?: () => any }>;
~~~

#### Available buttons within Toolbar

Here are the buttons you can add to the RichText toolbar:

| Button              | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Reverses the last user action.                                              |
| `redo`              | Reapplies the action that was undone before.                               |
| `style`             | Lets you pick text styles like headings or paragraphs.                      |
| `font-family`       | Changes the font of the selected text.                                      |
| `font-size`         | Changes the size of the selected text.                                      |
| `bold`              | Makes the selected text bold.                                               |
| `italic`            | Italicizes the selected text.                                               |
| `underline`         | Underlines the selected text.                                               |
| `strike`            | Adds a strikethrough effect.                                                |
| `subscript`         | Formats text as subscript.                                                  |
| `superscript`       | Formats text as superscript.                                                |
| `text-color`        | Changes the text color.                                                     |
| `background-color`  | Changes the background highlight color of the text.                        |
| `align`             | Sets text alignment: left, center, right, or justified.                    |
| `indent`            | Increases indentation of text blocks.                                      |
| `outdent`           | Decreases paragraph indentation.                                           |
| `line-height`       | Adjusts line spacing.                                                       |
| `quote`             | Formats text as a blockquote.                                              |
| `bulleted-list`     | Creates a bulleted list.                                                    |
| `numbered-list`     | Creates a numbered list.                                                    |
| `link`              | Inserts a hyperlink.                                                        |
| `image`             | Inserts an image.                                                           |
| `line`              | Inserts a horizontal line.                                                  |
| `clear`             | Removes all formatting from the selected text.                             |
| `print`             | Opens the print dialog.                                                     |
| `fullscreen`        | Toggles fullscreen mode.                                                    |
| `mode`              | Switches between [layout modes](api/config/layout-mode.md) (classic/document).|
| `shortcuts`         | Shows a list of keyboard shortcuts.                                        |
| `separator`         | Adds a visual separator between toolbar groups.                            |

You can use these strings to set up toolbar buttons like this:

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

Custom buttons can be set up as objects with these options:

- `type` - (required) defines the control type. Options are `"button"`, `"richselect"`, `"colorpicker"`.
- `id` - (optional) a unique control ID (shouldn't clash with existing IDs).
- `label` - (optional) text label for the button (appears alongside the icon).
- `tooltip` - (optional) text shown on hover (defaults to the label if not set).
- `css` - (optional) CSS class for the control (default classes include wx-primary, wx-secondary).
- `handler` - (optional) function that runs when the button is clicked.

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // buttons (strings represent buttons only)
        "bold",
        "italic",
        // predefined buttons (users can’t add extra options like labels or tooltips here, only ({ type: "button", id: string })
        {
            type: "button",
            id: "fullscreen",
        },
        // users must specify the right type for predefined controls (e.g. richselect/colorpicker)
        // controls with wrong types won’t be added
        {
            type: "richselect", // type: "button" - would be ignored
            id: "mode",
        },
        // custom buttons (only these options are supported)
        // currently, only custom buttons are allowed (no richselect/colorpicker support)
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

To hide the toolbar, just set the `toolbar` property to `false` like this:

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
The default toolbar controls come with the RichText widget and can be accessed via `richtext.defaultToolbarButtons`.

```jsx{4}
// initialize RichText
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1", // unique button ID for custom logic
            icon: "wxo-help", // icon shown with label
            css: "rounded", // CSS class for styling (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label next to icon
            tooltip: "Some tooltip", // tooltip on hover (defaults to label if missing)
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
        // custom buttons (all supported options shown here)
        // currently, only custom buttons are supported (no richselect/colorpicker)
        {
            type: "button",
            id: "btn1", // unique button ID for custom logic
            icon: "wxo-help", // icon shown with label
            css: "rounded", // CSS class for styling (default supported classes: wx-primary, wx-secondary)
            label: "Custom button", // button label next to icon
            tooltip: "Some tooltip", // tooltip on hover (defaults to label if missing)
            handler: () => ..., // custom logic for this button
        }
    ]
    // other configuration properties
});
~~~

**Change log:** This property was introduced in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)
