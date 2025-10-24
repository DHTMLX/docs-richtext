---
sidebar_label: indent
title: indent Event
description: Explore the indent event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX RichText.
---

# indent

### Description

@short: Triggered when the block indentation is increased

### Usage

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Parameters

The callback for the **indent** event receives an object containing the following property:

- `step` - the amount by which the indentation was increased

:::info
To manage internal events, you can refer to [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "indent" event
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**Change log:** This event was introduced in version 2.0
