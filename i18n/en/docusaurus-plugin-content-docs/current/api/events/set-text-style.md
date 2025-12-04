---
sidebar_label: set-text-style
title: set-text-style Event
description: Explore the set-text-style event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# set-text-style

### Description

@short: Triggered when a text style is applied

### Usage

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Parameters

The callback for the **set-text-style** event receives an object with the following property:

- `tag` - specifies the text style being applied

:::info
To manage internal events, you can refer to the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "set-text-style" event
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("Text style has been updated");
});
// change the text style
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**Change log:** This event was introduced in v2.0