---
sidebar_label: api.on()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.on()

### Description

@short: Lets you attach a handler to internal events

### Usage

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameters

- `event` - (required) the event that will trigger the handler
- `handler` - (required) the function to be called when the event fires (the arguments depend on the event)

### Events

:::info
You can find the complete list of RichText internal events [**here**](api/overview/events_overview.md)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Change log:** The method was updated in v2.0. The `context` parameter was removed