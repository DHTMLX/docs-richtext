---
sidebar_label: indent
title: indent Event
description: You can learn about the indent event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# indent

### Description

@short: Fires when increasing block indention

### Usage

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Parameters

The callback of the **indent** event can take an object with the following parameters:

- `step` - the step of indent was added

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "indent" event
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indent was added");
});
~~~

**Change log:** The event was added in v2.0
