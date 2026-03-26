---
sidebar_label: insert-image
title: insert-image Event
description: You can learn about the insert-image event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# insert-image

### Description

@short: Fires when inserting image

### Usage

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // extra props from uploader ctx, not required for the actual action
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

### Parameters

The callback of the **insert-image** event receives an `IImageContext` object with the following parameters:

- `id` - the unique identifier of the image
- `value` - the image URL (src)
- `width` - the image width in pixels
- `height` - the image height in pixels
- `name` - (optional) the original file name
- `file` - (optional) the `File` object from the uploader
- `status` - (optional) the upload status string
- `selected` - a callback invoked when the image is selected; receives the `IImageContext` object
- `uploaded` - a callback invoked when the image upload completes; receives the `IImageContext` object

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-image" event
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**Change log:** The event was added in v2.0
