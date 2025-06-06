---
sidebar_label: insert-list
title: insert-list Event
description: You can learn about the insert-list event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# insert-list

### Description

@short: Fires when ...

### Usage

~~~jsx {}
"insert-list": ...;
~~~

### Parameters

The callback of the **insert-list** event can take an object with the following parameters:

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
// subscribe on the "insert-list" event
editor.api.on("insert-list", (obj) => {
    console.log(obj);
});
~~~
