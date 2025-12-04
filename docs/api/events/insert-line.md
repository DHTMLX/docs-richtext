---
sidebar_label: insert-line
title: insert-line Event
description: Find details about the insert-line event in the DHTMLX JavaScript RichText library documentation. Explore developer guides, API references, try out examples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# insert-line

### Description

@short: Triggered when a horizontal line is inserted

### Usage

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info
To work with internal events, you can use the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "insert-line" event
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**Change log:** This event was introduced in v2.0
