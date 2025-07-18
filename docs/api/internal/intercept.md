---
sidebar_label: api.intercept()
title: intercept Method
description: You can learn about the intercept method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.intercept()

### Description

@short: Allows intercepting and preventing the inner events

### Usage

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameters

- `event` - (required) an event to be fired
- `callback` - (required) a callback to be performed (the callback arguments will depend on the event to be fired)

### Events

:::info
The full list of the RichText internal events can be found [**here**](api/overview/main_overview.md/#richtext-events)
:::

### Example

~~~jsx {5-10}
// create RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// forbid changing the font size
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**Change log:** The method was added in v2.0
