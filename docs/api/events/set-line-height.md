---
sidebar_label: set-line-height
title: set-line-height Event
description: You can learn about the set-line-height event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-line-height

### Description

@short: Fires when ...

### Usage

~~~jsx {}
"set-line-height": ...;
~~~

### Parameters

The callback of the **set-line-height** event can take an object with the following parameters:

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
// subscribe on the "set-line-height" event
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
});
~~~
