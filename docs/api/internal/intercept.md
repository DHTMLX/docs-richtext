---
sidebar_label: api.intercept()
title: intercept Method
description: You can learn about the intercept method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.intercept()

### Description

@short: Provides a way to catch and block internal events before they proceed.

### Usage

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameters

- `event` - (required) the name of the event to intercept
- `callback` - (required) a function to execute when the event occurs (arguments depend on the specific event)

### Events

:::info
You can find the complete list of RichText internal events [**here**](api/overview/events_overview.md)
:::

### Example

~~~jsx {5-10}
// create RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// prevent changing the font size except to "36px"
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**Change log:** The method was added in v2.0
