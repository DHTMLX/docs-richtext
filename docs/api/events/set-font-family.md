---
sidebar_label: set-font-family
title: set-font-family Event
description: You can learn about the set-font-family event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-font-family

### Description

@short: Fires when ...

### Usage

~~~jsx {}
"set-font-family": ...;
~~~

### Parameters

The callback of the **set-font-family** event can take an object with the following parameters:

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
// subscribe on the "set-font-family" event
editor.api.on("set-font-family", (obj) => {
    console.log(obj);
});
~~~
