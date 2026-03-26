---
sidebar_label: insert-link
title: insert-link Event
description: You can learn about the insert-link event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# insert-link

### Description

@short: Fires when inserting link

### Usage

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Parameters

The callback of the **insert-link** event can take an object with the following parameter:

- `url` - the url to be inserted

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-link" event
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Change log:** The event was added in v2.0
