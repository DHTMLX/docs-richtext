---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Configuration

You can configure the RichText appearance and behavior with the following properties:

- [`menubar`](api/config/menubar.md) — show or hide the top menubar
- [`toolbar`](api/config/toolbar.md) — configure toolbar visibility and buttons
- [`fullscreenMode`](api/config/fullscreen-mode.md) — start the editor in fullscreen
- [`layoutMode`](api/config/layout-mode.md) — switch between the `"classic"` and `"document"` layouts
- [`value`](api/config/value.md) — set the initial HTML content
- [`locale`](api/config/locale.md) — apply a localization object on initialization
- [`defaultStyles`](api/config/default-styles.md) — set default styles for specific block types
- [`imageUploadUrl`](api/config/image-upload-url.md) — set the endpoint for image uploads
- [`triggers`](api/config/triggers.md) — enable @mentions, #tags, and custom dropdown triggers (see the [Mentions and tags](guides/mentions_and_tags.md) guide)

## Layout modes

RichText supports two layout modes for the editing area:

- **"classic"** — the edit area fills the entire page

<div className="img_border">
![Classic mode](./../assets/richtext/classic_mode.png)
</div>

- **"document"** — the edit area mimics a document page

<div className="img_border">
![Document mode](./../assets/richtext/document_mode.png)
</div>

Set the [`layoutMode`](api/config/layout-mode.md) property during initialization to choose the mode:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar

The RichText toolbar groups controls into several blocks that you can customize.

### Default toolbar controls

You can include the following buttons and controls in the RichText toolbar:

| Button              | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `undo`              | Reverts the most recent user action                                         |
| `redo`              | Reapplies the previously undone action                                      |
| `style`             | Selects a text style (e.g., heading, paragraph, blockquote)                 |
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
| `mode`              | Switches between two layout modes: `classic` and `document`                     |
| `shortcuts`         | Displays a list of available keyboard shortcuts                             |
| `separator`         | Adds a visual separator between controls                                    |

Use the [`toolbar`](api/config/toolbar.md) property to define the toolbar as an array of control name strings:

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

### Add custom toolbar controls

Pass an object to the [`toolbar`](api/config/toolbar.md) array with one of these fields:

- `type: string` — required. Control type: `"button"`, `"richselect"`, or `"colorpicker"`
- `id: string` — optional. Custom control ID; cannot overlap with existing control IDs
- `icon: string` — optional. Icon class name; combines with the label
- `label: string` — optional. Button label; combines with the icon
- `tooltip: string` — optional. Tooltip that appears on hover; defaults to `label` if not set
- `css: string` — optional. CSS class for the control. Built-in classes: `wx-primary`, `wx-secondary`
- `handler: () => void` — optional. Callback that runs on click

The example below combines built-in buttons, a predefined control with the `richselect` type, and two custom buttons:

~~~jsx {6-32}
new richtext.Richtext("#root", {
    toolbar: [
        // string entries represent built-in buttons
        "bold",
        "italic",
        // predefined buttons accept only { type: "button", id: string }
        {
            type: "button",
            id: "fullscreen",
        },
        // for predefined richselect/colorpicker controls, set the matching type
        // entries with a non-matching type are ignored
        {
            type: "richselect", // type: "button" would be ignored here
            id: "mode",
        },
        // custom buttons (richselect/colorpicker are not supported for custom controls)
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

Set the [`toolbar`](api/config/toolbar.md) property to `false` to hide the toolbar:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // other configuration properties
});
~~~

## Show the menubar

Enable the [`menubar`](api/config/menubar.md) property to render the top menubar above the toolbar. The default value is `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    menubar: true
    // other configuration properties
});
~~~

## Set the initial content

Use the [`value`](api/config/value.md) property to pass initial HTML content into the editor on initialization:

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>"
    // other configuration properties
});
~~~

To replace the content after initialization, or to load it in a non-HTML format with a custom encoder, call the [`setValue()`](api/methods/set-value.md) method.

## Set the initial locale

Use the [`locale`](api/config/locale.md) property to apply a localization object on initialization:

~~~jsx {2}
new richtext.Richtext("#root", {
    locale: richtext.locales.cn
    // other configuration properties
});
~~~

For details and dynamic locale switching with [`setLocale()`](api/methods/set-locale.md), see the [Localization](guides/localization.md) guide.

## Start in fullscreen mode

Set the [`fullscreenMode`](api/config/fullscreen-mode.md) property to `true` to open the editor in fullscreen on initialization. The default value is `false`.

~~~jsx {2}
new richtext.Richtext("#root", {
    fullscreenMode: true
    // other configuration properties
});
~~~

## Configure image insertion

RichText supports two modes for inserting images via the toolbar, menubar, paste, or drag-and-drop. The mode is selected automatically based on the [`imageUploadUrl`](api/config/image-upload-url.md) property.

### Upload images to a server

Pass a URL to the [`imageUploadUrl`](api/config/image-upload-url.md) property to upload each inserted image to your endpoint. RichText sends the file as `multipart/form-data` (field name `upload`) and inserts the URL returned by the server:

~~~jsx {2}
new richtext.Richtext("#root", {
    imageUploadUrl: "https://example.com/upload"
    // other configuration properties
});
~~~

### Insert images inline as base64

Omit [`imageUploadUrl`](api/config/image-upload-url.md) (or set it to an empty string) to embed images directly into the document content as base64 data URLs. No server is required:

~~~jsx {2}
new richtext.Richtext("#root", {
    // imageUploadUrl is not set, images are inserted inline
    // other configuration properties
});
~~~

Inline images larger than 1024×800 are proportionally downscaled to fit within these limits.

:::note
Inline (base64) images are not preserved by the built-in DOCX / PDF [export](api/events/export.md). If you rely on export, supply an `imageUploadUrl` so that images reference an external location.
:::

## Configure default styles

Use the [`defaultStyles`](api/config/default-styles.md) property to set default styles per block type.

The [`defaultStyles`](api/config/default-styles.md) property has the following type signature:

~~~jsx {}
defaultStyles?: boolean | {
    "*"?: { // applies to all blocks; sets common properties for every block
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

The [`defaultStyles`](api/config/default-styles.md) property does not apply CSS to the affected blocks. Apply matching CSS styles separately:

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

In this example, all `h2` blocks use the `"Roboto"` font family at 28px with purple text on a pink background. The matching CSS rule applies the same values to the rendered `h2` elements.

**Related sample:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)
