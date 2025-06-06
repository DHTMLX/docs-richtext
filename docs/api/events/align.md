---
sidebar_label: align
title: align Event
description: You can learn about the align event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# align

### Description

@short: Fires when ...

### Usage

~~~jsx {}
"align": ...;
~~~

### Parameters

The callback of the **align** event can take an object with the following parameters:

...

:::info
For handling the inner events you can use the [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)
:::

### Example

~~~jsx {7-9}
// create RichText
const editor = new richtext.Richtext("#root", {
    ...
});
// subscribe on the "align" event
editor.api.on("align", (obj) => {
    console.log(obj);
});
~~~
