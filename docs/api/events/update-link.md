---
sidebar_label: update-link
title: update-link Event
description: You can learn about the update-link event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# update-link

### Description

@short: Fires when ...

### Usage

~~~jsx {}
"update-link": ...;
~~~

### Parameters

The callback of the **update-link** event can take an object with the following parameters:

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
// subscribe on the "update-link" event
editor.api.on("update-link", (obj) => {
    console.log(obj);
});
~~~
