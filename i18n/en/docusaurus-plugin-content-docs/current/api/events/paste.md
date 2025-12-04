---
sidebar_label: paste
title: paste Event
description: Explore the paste event in the DHTMLX JavaScript RichText library documentation. Access developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# paste

### Description

@short: Triggered when content is pasted

### Usage

~~~jsx {}
"paste": () => boolean | void;
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
// subscribe to the "paste" event
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**Change log:** This event was introduced in v2.0