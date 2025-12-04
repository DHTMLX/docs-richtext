---
sidebar_label: api.detach()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.detach()

### Description

@short: Enables the removal or detachment of event handlers

### Usage

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parameters

- `tag` - (required) specifies the name of the action tag

### Events

:::info
A complete list of RichText internal events is available [**here**](api/overview/events_overview.md)
:::

### Example

~~~jsx {6-8,10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**Change log:** The method was updated in v2.0. The `name` and `context` parameters were removed