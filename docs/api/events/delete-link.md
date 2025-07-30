---
sidebar_label: delete-link
title: delete-link Event
description: You can learn about the delete-link event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# delete-link

### Description

@short: Fires when deleting a link

### Usage

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
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

**Change log:** The event was added in v2.0
