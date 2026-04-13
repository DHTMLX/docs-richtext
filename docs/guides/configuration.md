---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Configuration

Configure RichText appearance and functionality with the following properties:

- [`menubar`](api/config/menubar.md) — show or hide the top menubar
- [`toolbar`](api/config/toolbar.md) — configure the toolbar controls
- [`fullscreenMode`](api/config/fullscreen-mode.md) — enable fullscreen mode on initialization
- [`layoutMode`](api/config/layout-mode.md) — set the layout to `"classic"` or `"document"` mode
- [`value`](api/config/value.md) — set the initial content of the editor
- [`locale`](api/config/locale.md) — set the initial locale
- [`defaultStyles`](api/config/default-styles.md) — apply default styles to specific block types
- [`imageUploadUrl`](api/config/image-upload-url.md) — specify the server URL for image uploads

## Show the menubar

Use the [`menubar`](api/config/menubar.md) property to show the top menubar of the editor.

The following code snippet enables the menubar during initialization:

~~~jsx {3}
new richtext.Richtext("#root", {
    menubar: true
    // other configuration properties
});
~~~

**Related sample:** [RichText. Initialization with menubar](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)

## Enable fullscreen mode

Use the [`fullscreenMode`](api/config/fullscreen-mode.md) property to launch the editor in fullscreen on initialization. The default value is `false`.

The following code snippet enables fullscreen mode:

~~~jsx {3}
new richtext.Richtext("#root", {
    fullscreenMode: true
    // other configuration properties
});
~~~

**Related sample:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)

## Set the initial value

Use the [`value`](api/config/value.md) property to set the initial content of the editor. Pass the content as an HTML string.

The following code snippet sets an initial value:

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>Hello World</h1>"
    // other configuration properties
});
~~~

## Set the image upload URL

Use the [`imageUploadUrl`](api/config/image-upload-url.md) property to specify the server endpoint for image uploads. When set, the image toolbar control uploads the selected file to this URL.

The following code snippet sets the image upload URL during initialization:

~~~jsx {3}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://your-server.com/upload"
    // other configuration properties
});
~~~

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)

## Choose a layout mode

RichText provides two layout modes for the editor:

- `"classic"`

<div className="img_border">
![Classic mode](./../assets/richtext/classic_mode.png)
</div>

- `"document"`

<div className="img_border">
![Document mode](./../assets/richtext/document_mode.png)
</div>

The following code snippet sets the layout to document mode:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar

The RichText toolbar contains several groups of controls that you can customize.

### Default toolbar controls

You can specify the following buttons and controls in the RichText toolbar:

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
| `mode`              | Switches between 2 view modes: Classic/ Document                            |
| `shortcuts`         | Displays a list of available keyboard shortcuts                             |
| `separator`         | Adds a visual separator between controls                                    |

Use the [`toolbar`](api/config/toolbar.md) property to define the toolbar structure as an array of control name strings:

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

### Custom toolbar controls

Specify custom controls as objects in the [`toolbar`](api/config/toolbar.md) property. Each object supports the following parameters:

- `type: string` — (required) the control type: `"button"`, `"richselect"`, or `"colorpicker"`
- `id: string` — (optional) a unique control ID; must not overlap with an existing control ID
- `label: string` — (optional) a button label; combines with icon if both are set
- `tooltip: string` — (optional) a tooltip shown on hover; defaults to `label` if not set
- `css: string` — (optional) a CSS class name for the control; built-in classes: `wx-primary`, `wx-secondary`
- `handler: function` — (optional) a callback that executes when the button is clicked

The following code snippet demonstrates predefined and custom control configurations in the `toolbar` property:

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // string items — built-in controls
        "bold",
        "italic",
        // predefined control as object — only type and id are supported
        {
            type: "button",
            id: "fullscreen",
        },
        // use the correct type for predefined controls — incorrect type is ignored
        {
            type: "richselect", // type: "button" — incorrect, control is ignored
            id: "mode",
        },
        // custom control — only "button" type is supported
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

### Hide the toolbar

To hide the toolbar, set the [`toolbar`](api/config/toolbar.md) property to `false`:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // other configuration properties
});
~~~

## Apply default styles

Use the [`defaultStyles`](api/config/default-styles.md) property to set default style values for specific block types in the editor.

The `defaultStyles` property accepts the following structure:

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

The `defaultStyles` property does not apply actual CSS to blocks. Apply CSS styles separately.

The following example sets default `h2` styles and applies matching CSS:

```html title="index.html"
<div id="root"></div>
```

```jsx {2-9} title="index.js"
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
```

```css title="index.css"
#root h2 {
    font-family: Roboto;
    font-size: 28px;
    color: purple;
    background: #FFC0CB;
}
```

In this example, all `h2` blocks use the `Roboto` font family at 28px, with foreground and background colors set. Apply matching CSS to the `h2` selector in your stylesheet.

**Related sample:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)
