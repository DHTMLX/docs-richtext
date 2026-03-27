---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Configuration

You can configure RichText appearance and functionality via the corresponding API. The available parameters will allow you to:

- Show/hide **menubar** using the [`menubar`](api/config/menubar.md) property
- Configure **toolbar** using the [`toolbar`](api/config/toolbar.md) property
- Enable the **fullscreen mode** using the [`fullscreenMode`](api/config/fullscreen-mode.md) property
- Toggle the **layout** between "classic" and "document" modes using the [`layoutMode`](api/config/layout-mode.md) property
- Specify **initial value** using the [`value`](api/config/value.md) property
- Specify **initial locale** using the [`locale`](api/config/locale.md) property
- Apply **initial styles** using the [`defaultStyles`](api/config/default-styles.md) property

## Layout modes {#layout-modes}

There are two layout modes of RichText editor between which you can select to get the best working place for creating your perfect content:

- **"classic"**

<div className="img_border">
![Classic mode](./../assets/richtext/classic_mode.png)
</div>

- **"document"**

<div className="img_border">
![Document mode](./../assets/richtext/document_mode.png)
</div>

To specify the desired mode, you need to define it in the [`layoutMode`](api/config/layout-mode.md) property of the RichText configuration object during initialization of the component:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar {#toolbar}

The RichText toolbar consists of several blocks of controls that can be changed according to your needs.

### Default toolbar controls {#default-toolbar-controls}

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

The toolbar structure is defined using the [`toolbar`](api/config/toolbar.md) property, which is an array with strings presenting the names of controls.

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

### Custom toolbar controls {#custom-toolbar-controls}

You can also specify custom controls as objects in the [`toolbar`](api/config/toolbar.md) property with the following parameters:

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

**Related sample:** [RichText. Custom control and simplified toolbar](https://snippet.dhtmlx.com/wda202ih?tag=richtext)

### Hide Toolbar {#hide-toolbar}

If you need to hide toolbar, set the [`toolbar`](api/config/toolbar.md) property to `false` as follows:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // other configuration properties
});
~~~

## Default styles {#default-styles}

You can apply default style values for specific block types in the editor using the [`defaultStyles`](api/config/default-styles.md) property.

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

The `defaultStyles` property DOES NOT set the actual CSS to the affected blocks. CSS styles have to be applied separately:

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

In this example, all `h2` blocks are assigned to the `"Roboto"` font-family with a font-size of 28px with both the foreground and the background colors changed as well. Css styles are assigned to `h2` blocks as well.

**Related sample:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)
