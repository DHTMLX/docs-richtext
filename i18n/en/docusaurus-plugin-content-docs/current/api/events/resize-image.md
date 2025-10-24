---
sidebar_label: resize-image
title: resize-image Event
description: You can learn about the resize-image event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# resize-image

### Description

@short: Triggered when an image is resized

### Usage

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Parameters

The callback for the **resize-image** event receives an object with these properties:

- `id` - the image's unique identifier
- `width` - the new width of the image
- `height` - the new height of the image

:::info
To work with internal events, you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration properties
});
// listen for the "resize-image" event
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**Change log:** This event was introduced in v2.0