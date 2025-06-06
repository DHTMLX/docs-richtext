---
sidebar_label: create-new
title: create-new Event
description: You can learn about the create-new event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# create-new

### Description

@short: Fires when ...

### Usage

~~~jsx {}
"create-new": ...;
~~~

### Parameters

The callback of the **create-new** event can take an object with the following parameters:

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
// subscribe on the "create-new" event
editor.api.on("create-new", (obj) => {
    console.log(obj);
});
~~~
