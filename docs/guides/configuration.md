---
sidebar_label: Configuration
title: Configuration
description: You can learn about the configuration in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# Configuration

RichText can be set up to look and work the way you want through its API. The available options let you:

- Show or hide the **menubar** with the [`menubar`](api/config/menubar.md) property
- Set up the **toolbar** using the [`toolbar`](api/config/toolbar.md) property
- Turn on **fullscreen mode** with the [`fullscreenMode`](api/config/fullscreen-mode.md) property
- Switch the **layout** between "classic" and "document" modes using the [`layoutMode`](api/config/layout-mode.md) property
- Set an **initial value** with the [`value`](api/config/value.md) property
- Choose an **initial locale** using the [`locale`](api/config/locale.md) property
- Apply **initial styles** with the [`defaultStyles`](api/config/default-styles.md) property

## Layout modes

RichText editor comes with two layout modes to pick from, so you can work in the environment that suits your content:

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

To pick a mode, just set the [`layoutMode`](api/config/layout-mode.md) property in the RichText config when you initialize the component:

~~~jsx
const editor = new richtext.Richtext("#root", {
    layoutMode: "document"
});
~~~

## Toolbar

The RichText toolbar is made up of several groups of controls, and you can change them to match what you need.

### Default toolbar controls

You can use these buttons and controls in the RichText toolbar:

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

The toolbar layout is set up with the [`toolbar`](api/config/toolbar.md) property, which is just an array of strings naming the controls you want.

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

If you want to add your own controls, you can include objects in the [`toolbar`](api/config/toolbar.md) property with these options:

- `type` - (required) sets the custom control type. You can use: `"button"`, `"richselect"`, `"colorpicker"`
- `id` - (optional) a custom control ID (shouldn't clash with built-in control IDs)
- `label` - (optional) a button label (can be used with an icon)
- `tooltip` - (optional) a tooltip shown on hover (if not set, uses the "label" value)
- `css` - (optional) a CSS class name for the control (default supported: wx-primary, wx-secondary)
- `handler` - (optional) a callback function that runs when the button is clicked

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

### Hide Toolbar

To hide the toolbar, just set the [`toolbar`](api/config/toolbar.md) property to `false` like this:

~~~jsx {2}
new richtext.Richtext("#root", {
    toolbar: false,
    // other configuration properties
});
~~~

## Default styles

Default style values for certain block types in the editor can be set with the [`defaultStyles`](api/config/default-styles.md) property.

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

The `defaultStyles` property doesn't actually apply CSS to the blocks-it just sets up the style values. You'll still need to add CSS styles separately:

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

Here, all `h2` blocks get the "Roboto" font-family, a font-size of 28px, and the foreground and background colors are updated as well. The CSS rules are applied to the `h2` blocks.

**Related sample:** [RichText. Changing the default value for typography (font, font size, etc.)](https://snippet.dhtmlx.com/6u3ti01s?tag=richtext)
