---
sidebar_label: undo
title: undo Event
description: You can learn about the undo event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# undo

### Description

@short: Fires when pressing the "Undo" button in the menubar/toolbar or via Event Bus methods

### Usage

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "undo" event
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**Change log:** The event was added in v2.0
