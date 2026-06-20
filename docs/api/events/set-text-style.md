---
sidebar_label: set-text-style
title: set-text-style Event
description: You can learn about the set-text-style event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-text-style

### Description

@short: Fires when setting a text style

### Usage

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Parameters

The callback of the `set-text-style` event can take an object with the following parameters:

- `tag` - a text style

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-style" event
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("The text style was changed");
});
// apply new text style
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**Change log:** The event was added in v2.0
