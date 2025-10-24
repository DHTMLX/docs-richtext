---
sidebar_label: align
title: align Event
description: Explore the align event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# align

### Description

@short: Triggered whenever the text alignment is updated using the menubar/toolbar or Event Bus methods.

### Usage

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Parameters

The callback for the **align** event receives an object with the following property:

- `align` - specifies the text alignment, which can be one of these values: `"left" | "center" | "right" | "justify"`

:::info
Inner events can be handled using [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-12}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "align" event
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// set the text alignment to left
editor.api.exec("align", {
    align: "left"
}); 
~~~

**Change log:** This event was introduced in version 2.0