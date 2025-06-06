---
sidebar_label: api.detach()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.detach()

### Description

@short: Allows attaching a handler to the inner events

### Usage

~~~jsx {}
api.detach(
    event: string,
    handler: function
): void;
~~~

### Parameters

- `event` - (required) an event to be fired
- `handler` - (required) a handler to be attached (the handler arguments will depend on the event to be fired)

### Events

:::info
The full list of the RichText internal events can be found [**here**](api/overview/main_overview.md/#richtext-events)
:::

### Example

~~~jsx {7-9}
// create RichText
const editor = new richtext.Richtext("#root", {
    ...
});
// ...
editor.api.detach("move-card", ({ id, columnId }) => {
    console.log({ id, columnId });
});
~~~
