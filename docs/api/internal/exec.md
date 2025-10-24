---
sidebar_label: api.exec()
title: exec Method
description: You can learn about the exec method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.exec()

### Description

@short: This method enables triggering internal events within the editor.

### Usage

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameters

- `event` - (required) the name of the event to trigger
- `config` - (required) an object containing parameters for the event being fired

### Events

:::info
You can find the complete list of internal RichText events [**here**](api/overview/events_overview.md)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// apply font size to the text
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**Change log:** This method was introduced in v2.0
