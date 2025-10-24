---
sidebar_label: superscript
title: superscript Event
description: Explore the superscript event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# superscript

### Description

@short: This event triggers when the "Superscript" button is clicked in the menubar or toolbar, or when activated through Event Bus methods.

### Usage

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
To manage internal events, refer to the [**Event Bus methods**](api/overview/event_bus_methods_overview.md).
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "superscript" event
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// trigger the "superscript" event
editor.api.exec("superscript", {});
~~~

**Change log:** This event was introduced in v2.0
