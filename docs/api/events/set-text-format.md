---
sidebar_label: set-text-format
title: set-text-format Event
description: You can learn about the set-text-format event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-text-format

### Description

@short: Fires when setting a text format

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
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Parameters

The callback of the `set-text-format` event can take an object with the following parameters:

- `bold` - a bold text format
- `italic` - an italic text format
- `strike` - a strike text format
- `underline` - an underline text format

### Example

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-format" event
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// apply the "italic" and bold text format
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**Change log:** The event was added in v2.0
