---
sidebar_label: set-text-color
title: set-text-color Event
description: You can learn about the set-text-color event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-text-color

### Description

@short: Fires when setting a text color

### Usage

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Parameters

The callback of the **set-text-color** event can take an object with the following parameters:

- `color` - a text color
- `background` - a text backgroung color

:::info
For handling the inner events you can use the [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "set-text-color" event
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("The text color and background were changed");
});
// apply text color and background
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**Change log:** The event was added in v2.0
