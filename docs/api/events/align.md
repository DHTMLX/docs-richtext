---
sidebar_label: align
title: align Event
description: You can learn about the align event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# align

### Description

@short: Fires when text alignment is changed via the menubar/toolbar or Event Bus methods

### Usage

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Parameters

The callback of the **align** event can take an object with the following parameter:

- `align` - a text alignment. You can specify one of the following values: `"left" | "center" | "right" | "justify"`

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-12}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "align" event
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// align the text to the left
editor.api.exec("align", {
    align: "left"
}); 
~~~

**Change log:** The event was added in v2.0
