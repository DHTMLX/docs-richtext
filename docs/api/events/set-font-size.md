---
sidebar_label: set-font-size
title: set-font-size Event
description: You can learn about the set-font-size event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-font-size

### Description

@short: Fires when setting a font size

### Usage

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Parameters

The callback of the **set-font-size** event can take an object with the following parameter:

- `fontSize` - a font size to be applied

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// apply new font size
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Change log:** The event was added in v2.0
