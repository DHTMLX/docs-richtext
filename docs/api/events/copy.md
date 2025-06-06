---
sidebar_label: copy
title: copy Event
description: You can learn about the copy event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# copy

### Description

@short: Fires when ...

### Usage

~~~jsx {}
"copy": ...;
~~~

### Parameters

The callback of the **copy** event can take an object with the following parameters:

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
// subscribe on the "copy" event
editor.api.on("copy", (obj) => {
    console.log(obj);
});
~~~
