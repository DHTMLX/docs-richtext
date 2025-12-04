---
sidebar_label: subscript
title: subscript Event
description: Explore the subscript event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# subscript

### Description

@short: Triggered when the "Subscript" button is clicked in the menubar/toolbar or invoked through Event Bus methods

### Usage

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
To work with internal events, you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "subscript" event
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// execute the "subscript" event
editor.api.exec("subscript", {});
~~~

**Change log:** This event was introduced in v2.0