---
sidebar_label: subscript
title: subscript Event
description: You can learn about the subscript event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# subscript

### Description

@short: Fires when pressing the "Subscript" button in the menubar/toolbar or via Event Bus methods

:::info
The **subscript** event will be applied at current cursor position.
:::

### Usage

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "subscript" event
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// trigger the "subscript" event
editor.api.exec("subscript", {});
~~~

**Change log:** The event was added in v2.0
