---
sidebar_label: api.detach()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.detach()

### Description

@short: Allows removing/detaching event handlers

### Usage

~~~jsx {}
api.detach( event: string ): void;
~~~

### Parameters

- `event` - (required) an event to be detached

### Events

:::info
The full list of RichText internal events can be found [**here**](/category/richtext-events/)
:::

### Example

~~~jsx {16-17}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});

// subscribe on the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});

// set the text font size
editor.api.exec("set-font-size", {
    fontSize: "36px"
}); 

// detach the "set-font-size" event
editor.api.detach("set-font-size");
~~~

**Change log:** The method was updated in v2.0. The `name` and `context` parameters were deprecated
