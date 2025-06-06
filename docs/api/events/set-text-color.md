---
sidebar_label: set-text-color
title: set-text-color Event
description: You can learn about the set-text-color event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-text-color

### Description

@short: Fires when ...

### Usage

~~~jsx {}
"set-text-color": ...;
~~~

### Parameters

The callback of the **set-text-color** event can take an object with the following parameters:

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
// subscribe on the "set-text-color" event
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
});
~~~
