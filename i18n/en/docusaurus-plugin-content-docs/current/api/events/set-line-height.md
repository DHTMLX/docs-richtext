---
sidebar_label: set-line-height
title: set-line-height Event
description: You can learn about the set-line-height event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-line-height

### Description

@short: Triggered whenever the line height is set

### Usage

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Parameters

The callback for the **set-line-height** event receives an object containing this parameter:

- `lineHeight` - the value of the line height being set

:::info
To manage internal events, you can refer to the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "set-line-height" event
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// set a new line height
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Change log:** The event was introduced in v2.0