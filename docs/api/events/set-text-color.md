---
sidebar_label: set-text-color
title: set-text-color Event
description: You can learn about the set-text-color event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-text-color

### Description {#description}

@short: Fires when setting a text color and/or a background text color

### Usage {#usage}

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Parameters {#parameters}

The callback of the **set-text-color** event can take an object with the following parameters:

- `color` - a text color
- `background` - a text background color

:::info
For handling the inner events you can use the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example {#example}

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-color" event
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("The text color and/or background text color were changed");
});
// apply text color and background
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**Change log:** The event was added in v2.0
