---
sidebar_label: Properties
title: Properties
description: Get insight into configuration properties utilized for working with text statistics, setting editor mode, and customizing the Toolbar in DHTMLX Rich Text Editor.
---

## `customStats`

Defines the logic of displaying custom statistics

`customStats?: array;`

~~~jsx
const editor = new richtext.Richtext("#root", {
    customStats: [
        {
            name: "chars"
        },
        {
            name: "words"
        },
        {
            name: "sentences",
            cb: function(text) {
                const rawSentences = text.split(/[.?!]+/);
                const count = 0;
                for (const i=0; i<rawSentences.length; i++) {
                    if (rawSentences[i].length > 0) {
                        count += 1;
                    }
                }
                return count;
            }
        }
    ],
    toolbarBlocks: ["default", "stats"]
});
~~~

**Related sample:** [Custom stats](https://snippet.dhtmlx.com/u1734epz)

#### Details

Each field of statistical data represents an object with two properties:

- `name` - (*string*) the name of the field that should be displayed
- `callback` - (*function*) a function that implements the logic of counting entries of the specified field

____

## `defaultStyles`

Defines default values of the Toolbar selection controls

`defaultStyles?: object;`

~~~jsx {2-5}
const editor = new richtext.Richtext("#root", {
    defaultStyles: {
        "font-size": "14px"
        "font-family": "Tahoma"
    }
});
~~~

**Default value**:

~~~jsx
const defaultStyles = {
    "font-family": "Roboto",
    "font-size": "14px",
    "color": "#4D4D4D",
    "background": "#FFFFFF",
    "bold": false,
    "italic": false,
    "strike": false,
    "underline": false,
    "align": "left", // "left" | "center" | "right" | false
};
~~~

**Related sample:** [RichText. Default styles](https://snippet.dhtmlx.com/pqqq1e5d)
____

## `mode`

The working mode of the RichText editor

`mode?: string;`

**Values**: "default", "document"

~~~jsx
const editor = new richtext.Richtext("#root", { 
    mode: "document"
});
~~~

**Default value**: "default"

**Related sample:** [RichText. Modes](https://snippet.dhtmlx.com/pdh5buvg)

____

## `toolbarBlocks`

Specifies blocks of buttons that will be shown in the RichText toolbar

`toolbarBlocks?: array;`

~~~jsx
// default Toolbar blocks
const editor = new richtext.Richtext("#root", { 
    toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
~~~

**Default value**: `["undo", "style", "decoration", "colors", "align", "link"]`

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/32jtemtm)

#### Details

### Full toolbar

The full Toolbar contains several more blocks: `"clear"`, `"fullscreen"`, and `"stats"`:

~~~jsx
const editor = new richtext.Richtext("#root", {
    // full toolbar
    toolbarBlocks: [
        "undo", "style", "decoration", "colors", "align", 
        "link", "clear", "stats", "fullscreen"
    ]
});
~~~

**Related sample:** [RichText. Full Toolbar](https://snippet.dhtmlx.com/5yga5ce1)

### Short Toolbar definition

The default set of buttons can be specified via the `"default"` definition in the `toolbarBlocks` array, like this:

~~~jsx
const editor = new richtext.Richtext("#root", {
    // full toolbar
    toolbarBlocks: ["default", "clear", "stats", "fullscreen"]
});
~~~

### Custom toolbar

It is also possible to create a custom Toolbar by setting desired blocks in the random order:

~~~jsx
const editor = new richtext.Richtext("#root", {
    toolbarBlocks: ["clear", "colors", "align", "decoration", 
        "undo", "fullscreen", "link"
    ]
});
~~~

**Related sample:** [Toolbar Blocks](https://snippet.dhtmlx.com/yp7en22d)
