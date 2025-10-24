---
sidebar_label: insert-link
title: insert-link Event
description: Explore the insert-link event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try sample code and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# insert-link

### Description

@short: Triggered when a link is inserted

### Usage

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Parameters

The callback for the **update-link** event receives an object with this parameter:

- `url` - the URL being inserted

:::info
To manage internal events, you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "insert-link" event
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Change log:** This event was introduced in v2.0
