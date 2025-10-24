---
sidebar_label: update-link
title: update-link Event
description: You can learn about the update-link event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# update-link

### Description

@short: Triggered when a link is updated

### Usage

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Parameters

The callback for the **update-link** event receives an object containing the following properties:

- `id` - the identifier of the link
- `url` - the updated URL

:::info
To manage internal events, you can refer to the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "update-link" event
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**Change log:** This event was introduced in v2.0