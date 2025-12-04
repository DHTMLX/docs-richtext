---
sidebar_label: delete-link
title: delete-link Event
description: You can learn about the delete-link event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# delete-link

### Description

@short: Triggered whenever a link is deleted

### Usage

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info
To manage internal events, you can refer to [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "delete-link" event
editor.api.on("delete-link", () => {
    console.log("The link was deleted");
});
~~~

**Change log:** This event was introduced in v2.0
