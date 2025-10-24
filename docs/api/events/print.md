---
sidebar_label: print
title: print Event
description: Explore the print event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code examples and live demos, and get a free 30-day trial of DHTMLX RichText.
---

# print

### Description

@short: Triggered when the document starts printing

### Usage

~~~jsx {}
"print": () => boolean | void;
~~~

:::info
To manage internal events, refer to the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration properties
});
// listen for the "print" event
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**Change log:** This event was introduced in v2.0