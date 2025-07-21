---
sidebar_label: superscript
title: superscript Event
description: You can learn about the superscript event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# superscript

### Description

@short: Fires when pressing the "Superscript" button in the menubar/toolbar or via Event Bus methods

### Usage

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "superscript" event
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// trigger the "superscript" event
editor.api.exec("superscript", {});
~~~

**Change log:** The event was added in v2.0
