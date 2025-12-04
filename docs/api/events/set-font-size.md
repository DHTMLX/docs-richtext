---
sidebar_label: set-font-size
title: set-font-size Event
description: Explore the set-font-size event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try demos, and download a free 30-day trial of DHTMLX RichText.
---

# set-font-size

### Description

@short: Triggered when the font size is set

### Usage

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Parameters

The callback for the **set-font-size** event receives an object with this parameter:

- `fontSize` - the font size to apply

:::info
To manage internal events, you can refer to [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// set a new font size
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Change log:** This event was introduced in v2.0
