---
sidebar_label: clear-text-format
title: clear-text-format Event
description: You can learn about the clear-text-format event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# clear-text-format

### Description {#description}

@short: Fires when a text format is cleared via the menubar/toolbar or Event Bus methods

### Usage {#usage}

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example {#example}

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "clear-text-format" event
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// clear text format
editor.api.exec("clear-text-format", {});
~~~

**Change log:** The event was added in v2.0
