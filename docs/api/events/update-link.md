---
sidebar_label: update-link
title: update-link Event
description: You can learn about the update-link event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# update-link

### Description

@short: Fires when updating link

### Usage

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Parameters

The callback of the **update-link** event can take an object with the following parameters:

- `id` - the link ID
- `url` - the modified url

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "update-link" event
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**Change log:** The event was added in v2.0
