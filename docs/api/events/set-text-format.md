---
sidebar_label: set-text-format
title: set-text-format Event
description: You can learn about the set-text-format event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-text-format

### Description

@short: Triggered when a text format is being applied

### Usage

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info
To manage internal events, you can refer to [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Parameters

The callback for the **set-text-format** event receives an object with these optional properties:

- `bold` - indicates bold text formatting
- `italic` - indicates italic text formatting
- `strike` - indicates strikethrough text formatting
- `underline` - indicates underline text formatting

### Example

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "set-text-format" event
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// apply italic and bold formatting to the text
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**Change log:** This event was introduced in version 2.0