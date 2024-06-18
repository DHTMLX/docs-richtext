---
sidebar_label: Properties
title: Properties
description: Get insight into configuration properties utilized for working with text statistics, setting editor mode, and customizing the toolbar in DHTMLX Rich Text Editor.
---

## `customStats`

Defines the logic of displaying custom statistics

`customStats?: array;`

~~~jsx
var richtext = new dhx.Richtext("richtext_container", {
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
                var rawSentences = text.split(/[.?!]+/);
                var count = 0;
                for (var i=0; i<rawSentences.length; i++) {
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

Defines default values of the toolbar selection controls

`defaultStyles?: object;`

~~~jsx {2-12}
var richtext = new dhx.Richtext("richtext_container", {
    defaultStyles: {
        paragraph: {
            "font-size": "14px"
        },
        h1: {
            "font-size": "20px"
        },
        "*": { // styles that apply to all types of blocks
            "font-family":"Tahoma"
        }
    }
});
~~~

**Default value**:

~~~jsx
var defaultStyles = {
    "font-family": "Roboto",
    "font-size": "14px",
    "color": "#4D4D4D",
    "background": "#FFFFFF",
    "bold": false,
    "italic": false,
    "strike": false,
    "underline": false,
    "style": "p",
    "blockquote": false,
    "align": false
};
~~~

**Related sample:** [Default styles](https://snippet.dhtmlx.com/vewoiptc)

____

## `mode`

The working mode of the RichText editor

`mode?: string;`

**Values**: "default", "document"

~~~jsx
var richtext = new dhx.RichText("richtext_container", { 
    mode: "document"
});
~~~

**Default value**: "default"

**Related sample:** [RichText. Modes](https://snippet.dhtmlx.com/pdh5buvg)

____

## `toolbarBlocks`

Specifies blocks of buttons that will be shown in the Richtext toolbar

`toolbarBlocks?: array;`

~~~jsx
// default toolbar blocks
var richtext = new dhx.RichText("richtext_container", { 
    toolbarBlocks: ["undo", "style", "decoration", "colors", "align", "link"]
});
~~~

**Default value**: `["undo", "style", "decoration", "colors", "align", "link"]`

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/32jtemtm)

#### Details

### Full toolbar

The full toolbar contains several more blocks: `"clear"`, `"fullscreen"`, and `"stats"`:

~~~jsx
var richtext = new dhx.RichText(document.body, {
    // full toolbar
    toolbarBlocks: [
        "undo", "style", "decoration", "colors", "align", 
        "link", "clear", "stats", "fullscreen"
    ]
});
~~~

**Related sample:** [RichText. Full Toolbar](https://snippet.dhtmlx.com/5yga5ce1)

### Short toolbar definition

The default set of buttons can be specified via the `"default"` definition in the `toolbarBlocks` array, like this:

~~~jsx
var richtext = new dhx.RichText(document.body, {
    // full toolbar
    toolbarBlocks: ["default", "clear", "stats", "fullscreen"]
});
~~~

### Custom toolbar

It is also possible to create a custom toolbar by setting desired blocks in the random order:

~~~jsx
var richtext = new dhx.RichText(document.body, {
    toolbarBlocks: ["clear", "colors", "align", "decoration", 
        "undo", "fullscreen", "link"
    ]
});
~~~

**Related sample:** [Toolbar Blocks](https://snippet.dhtmlx.com/yp7en22d)
