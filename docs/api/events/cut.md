---
sidebar_label: cut
title: cut Event
description: Explore the cut event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# cut

### Description

@short: Triggered when selected text is cut

### Usage

~~~jsx {}
"cut": () => boolean | void;
~~~

:::info
To manage internal events, the [**Event Bus methods**](api/overview/event_bus_methods_overview.md) can be used.
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "cut" event
editor.api.on("cut", () => {
    console.log("Selected text was cut");
});
~~~

**Change log:** The event was introduced in v2.0
