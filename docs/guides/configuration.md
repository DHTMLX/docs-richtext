---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Configuration

Configure RichText appearance and functionality with the following properties:

- [`menubar`](api/config/menubar.md) — show or hide the top menubar
- [`toolbar`](api/config/toolbar.md) — configure toolbar buttons
- [`fullscreenMode`](api/config/fullscreen-mode.md) — start the editor in fullscreen mode
- [`layoutMode`](api/config/layout-mode.md) — toggle between "classic" and "document" layout
- [`value`](api/config/value.md) — set the initial editor content
- [`locale`](api/config/locale.md) — set the initial locale
- [`defaultStyles`](api/config/default-styles.md) — apply default styles to block types
- [`imageUploadUrl`](api/config/image-upload-url.md) — specify the URL for image uploads

## Set the layout mode

RichText supports two layout modes. Select the mode that best fits your workflow:

- **"classic"**

<div className="img_border">
![Classic mode](./../assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Document mode](./../assets/richtext/document_mode.png)
</div>

Set the [`layoutMode`](api/config/layout-mode.md) property to `"document"` or `"classic"` during initialization:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Configure the toolbar

The RichText toolbar consists of several blocks of controls. Customize the toolbar to match your needs.

### Default controls

Use the following string values to specify buttons in the [`toolbar`](api/config/toolbar.md) property:

| Button              | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Reverts the most recent user action                                         |
| `redo`              | Reapplies the previously undone action                                      |
| `style`             | Allows selection of text styles (e.g., headings, paragraph, etc.)           |
| `font-family`       | Changes the font of the selected text                                       |
| `font-size`         | Adjusts the size of the selected text                                       |
| `bold`              | Applies bold formatting to the selected text                                |
| `italic`            | Applies italic formatting to the selected text                              |
| `underline`         | Underlines the selected text                                                |
| `strike`            | Applies strikethrough formatting                                            |
| `subscript`         | Formats the text as subscript                                               |
| `superscript`       | Formats the text as superscript                                             |
| `text-color`        | Changes the text color                                                      |
| `background-color`  | Changes the background (highlight) color of the text                        |
| `align`             | Sets text alignment (left, center, right, justified)                        |
| `indent`            | Increases paragraph indentation                                             |
| `outdent`           | Decreases paragraph indentation                                             |
| `line-height`       | Adjusts the line spacing (line height)                                      |
| `quote`             | Formats the text as a blockquote                                            |
| `bulleted-list`     | Creates a bulleted list                                                     |
| `numbered-list`     | Creates a numbered list                                                     |
| `link`              | Inserts or edits a hyperlink                                                |
| `image`             | Inserts an image                                                            |
| `line`              | Inserts a horizontal line                                                   |
| `clear`             | Removes all formatting from the selected text                               |
| `print`             | Opens the print dialog                                                      |
| `fullscreen`        | Toggles fullscreen mode                                                     |
| `mode`              | Switches between 2 view modes: Classic / Document                           |
| `shortcuts`         | Displays a list of available keyboard shortcuts                             |
| `separator`         | Adds a visual separator between controls                                    |

Define the toolbar structure with the [`toolbar`](api/config/toolbar.md) property. Pass an array of button name strings:

~~~jsx {2-36}
new richtext.Richtext("#root", {
    toolbar: [
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
        // other buttons
    ],
    // other configuration properties
});
~~~

**Related sample:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Add custom controls

Add custom controls to the toolbar as objects in the [`toolbar`](api/config/toolbar.md) property. Each custom control supports the following parameters:

- `type` — (required) custom control type; available values: `"button"`, `"richselect"`, `"colorpicker"`
- `id` — (optional) control ID; cannot overlap with existing control IDs
- `label` — (optional) button label; combines with icon
- `tooltip` — (optional) tooltip shown on hover; uses `label` value if not specified
- `css` — (optional) CSS class name; default supported classes: `wx-primary`, `wx-secondary`
- `handler` — (optional) callback function executed on button click

The following code snippet adds both predefined and custom controls to the toolbar:

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

**Related sample:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

Use `richtext.defaultToolbarButtons` to extend the default toolbar without rewriting the full button list:

~~~jsx {4}
new richtext.Richtext("#root", {
    toolbar: [
        ...richtext.defaultToolbarButtons,
        {
            type: "button",
            id: "btn1",
            icon: "wxo-help",
            label: "Help",
        }
    ]
    // other configuration properties
});
~~~

### Hide the toolbar

Set the [`toolbar`](api/config/toolbar.md) property to `false` to hide the toolbar:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // other configuration properties
});
~~~

## Enable the menubar

Use the [`menubar`](api/config/menubar.md) property to show the top menubar with File, Edit, View, and other menus.

~~~jsx {2}
new richtext.Richtext("#root", {
    menubar: true,
    // other configuration properties
});
~~~

## Enable fullscreen mode

Use the [`fullscreenMode`](api/config/fullscreen-mode.md) property to start the editor in fullscreen mode.

~~~jsx {2}
new richtext.Richtext("#root", {
    fullscreenMode: true,
    // other configuration properties
});
~~~

## Set the initial value

Use the [`value`](api/config/value.md) property to preload content into the editor on initialization.

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>Hello, world!</h1><p>Start editing...</p>"
    // other configuration properties
});
~~~

## Set default styles

Use the [`defaultStyles`](api/config/default-styles.md) property to apply initial style values to specific block types.

The following type signature shows the supported block types and style properties:

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // affects all blocks, allowing you to set common properties for all of these blocks
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    p?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    blockquote?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h1?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h2?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h3?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h4?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h5?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    },
    h6?: {
        "font-family"?: string; // "Roboto"| "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"
        "font-size"?: string; // "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px" | "32px" | "36px"
        color?: string;
        background?: string;
    }
};
~~~

The `defaultStyles` property does not apply CSS to the affected blocks. Apply CSS separately:

~~~html title="index.html"
<div id="root"></div>
~~~

~~~jsx {2-9} title="index.js"
const editor = new richtext.Richtext("#root", {
    defaultStyles: {
        h2: { 
            "font-family": "Roboto",
            "font-size": "28px",
            color: "purple",
            background: "#FFC0CB"
        }
    }
});
~~~

~~~css title="index.css"
#root h2 {
    font-family: Roboto;
    font-size: 28px;
    color: purple;
    background: #FFC0CB;
}
~~~

This example assigns the `"Roboto"` font, 28px size, and custom colors to all `h2` blocks. The CSS applies the same values at the DOM level.

**Related sample:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)

## Set image upload URL

Use the [`imageUploadUrl`](api/config/image-upload-url.md) property to specify the server URL for image uploads.

The following code snippet configures the URL for uploading images inserted through the toolbar:

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // other configuration properties
});
~~~
