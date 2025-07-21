---
sidebar_label: resize-image
title: resize-image Event
description: You can learn about the resize-image event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# resize-image

### Description

@short: Fires when ...

### Usage

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Parameters

The callback of the **resize-image** event can take an object with the following parameters:

- `id` - the image ID
- `width` - the image width
- `height` - the image height

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration parameters
});
// subscribe on the "resize-image" event
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**Change log:** The event was added in v2.0
