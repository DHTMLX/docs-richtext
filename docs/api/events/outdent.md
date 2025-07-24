---
sidebar_label: outdent
title: outdent Event
description: You can learn about the outdent event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# outdent

### Description

@short: Fires when decreasing indent

### Usage

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Parameters

The callback of the **outdent** event can take an object with the following parameters:

- `step` - the step by which indentation was decreased

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "outdent" event
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The outdent was added");
});
~~~

**Change log:** The event was added in v2.0
