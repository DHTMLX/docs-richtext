---
sidebar_label: set-line-height
title: set-line-height Event
description: You can learn about the set-line-height event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-line-height

### Description

@short: Fires when setting a line height

### Usage

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Parameters

The callback of the **set-line-height** event can take an object with the following parameter:

- `lineHeight` - a line height

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "set-line-height" event
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// apply a new line height
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Change log:** The event was added in v2.0
