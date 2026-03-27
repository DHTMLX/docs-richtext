---
sidebar_label: redo
title: redo Event
description: You can learn about the redo event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# redo

### Description {#description}

@short: Fires when pressing the "Redo" button in the menubar/toolbar or via Event Bus methods

### Usage {#usage}

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example {#example}

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "redo" event
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**Change log:** The event was added in v2.0
