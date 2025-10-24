---
sidebar_label: undo
title: undo Event
description: Explore the undo event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# undo

### Description

@short: Triggered when the "Undo" button is clicked in the menubar/toolbar or activated through Event Bus methods.

### Usage

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info
Inner events can be managed using [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "undo" event
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**Change log:** This event was introduced in v2.0