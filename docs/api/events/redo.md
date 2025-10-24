---
sidebar_label: redo
title: redo Event
description: Explore the redo event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX RichText.
---

# redo

### Description

@short: Triggered when the "Redo" button is clicked in the menubar/toolbar or activated through Event Bus methods.

### Usage

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info
To manage internal events, you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

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

**Change log:** This event was introduced in version 2.0