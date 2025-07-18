---
sidebar_label: api.exec()
title: exec Method
description: You can learn about the exec method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.exec()

### Description

@short: Allows triggering inner events

### Usage

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameters

- `event` - (required) an event to be fired
- `config` - (required) the config object with parameters (see the event to be fired)

### Events

:::info
The full list of the RichText internal events can be found [**here**](/category/richtext-events/)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// set the text font size
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**Change log:** The method was added in v2.0
