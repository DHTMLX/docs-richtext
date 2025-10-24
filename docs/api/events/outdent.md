---
sidebar_label: outdent
title: outdent Event
description: Explore the outdent event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX RichText.
---

# outdent

### Description

@short: Triggered when the block indentation is reduced

### Usage

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Parameters

The callback for the **outdent** event receives an object containing:

- `step` - the amount by which the indentation was decreased

:::info
To work with internal events, you can refer to [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "outdent" event
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indentation was decreased");
});
~~~

**Change log:** This event was introduced in v2.0
