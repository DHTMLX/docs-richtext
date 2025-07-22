---
sidebar_label: api.on()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.on()

### Description

@short: Allows attaching a handler to the inner events

### Usage

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameters

- `event` - (required) an event to be fired
- `handler` - (required) a handler to be attached (the handler arguments will depend on the event to be fired)

### Events

:::info
The full list of RichText internal events can be found [**here**](/category/richtext-events/)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe on the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Change log:** The method was updated in v2.0. The `context` parameter were deprecated
