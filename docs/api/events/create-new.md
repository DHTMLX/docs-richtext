---
sidebar_label: create-new
title: create-new Event
description: Discover how the create-new event works in the DHTMLX JavaScript RichText library. Explore developer guides, API references, try out code samples and live demos, and get a free 30-day trial of DHTMLX RichText.
---

# create-new

### Description

@short: This event triggers when selecting the "New" option from the menubar or by using Event Bus methods.

### Usage

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parameters

The callback for the **create-new** event accepts an object with the following property:

- `reset` - indicates whether the history should be reset when a new file is created.

:::info
To manage internal events, you can utilize the [**Event Bus methods**](api/overview/event_bus_methods_overview.md).
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

**Change log:** This event was introduced in v2.0