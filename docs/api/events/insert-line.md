---
sidebar_label: insert-line
title: insert-line Event
description: You can learn about the insert-line event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# insert-line

### Description {#description}

@short: Fires when inserting horizontal line

### Usage {#usage}

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info
For handling the inner events you can use the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example {#example}

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-line" event
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**Change log:** The event was added in v2.0
