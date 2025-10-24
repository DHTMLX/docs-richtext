---
sidebar_label: set-text-color
title: set-text-color Event
description: Explore the set-text-color event in the DHTMLX JavaScript RichText library documentation. Find developer guides, API references, code samples, live demos, and get a free 30-day trial of DHTMLX RichText.
---

# set-text-color

### Description

@short: Triggered when a text color and/or background color is applied

### Usage

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Parameters

The callback for the **set-text-color** event receives an object with these properties:

- `color` - the text color
- `background` - the background color of the text

:::info
To manage internal events, you can refer to the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "set-text-color" event
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("Text color and/or background color have been updated");
});
// set text color and background
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**Change log:** This event was introduced in v2.0