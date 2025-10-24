---
sidebar_label: copy
title: copy Event
description: Explore the copy event in the DHTMLX JavaScript RichText library documentation. Access developer guides, API references, try out live demos and code examples, and download a free 30-day trial of DHTMLX RichText.
---

# copy

### Description

@short: Triggered when selected text is copied

### Usage

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info
To work with inner events, you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "copy" event
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**Change log:** This event was introduced in v2.0
