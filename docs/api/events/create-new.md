---
sidebar_label: create-new
title: create-new Event
description: You can learn about the create-new event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# create-new

### Description

@short: Fires when pressing the "New" option within the menubar or via Event Bus methods

### Usage

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parameters

The callback of the `create-new` event can take an object with the following parameter:

- `reset` - resets the history when creating a new file

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "create-new" event
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// create new file and reset the history
editor.api.exec("create-new", { reset: true });
~~~

**Change log:** The event was added in v2.0
