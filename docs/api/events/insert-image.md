---
sidebar_label: insert-image
title: insert-image Event
description: You can learn about the insert-image event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# insert-image

### Description

@short: Fires when inserting an image (via the toolbar, menubar, clipboard paste, or drag-and-drop)

### Usage

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;  // image source: server URL when imageUploadUrl is set, or a base64 data URL when the image is inlined
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

:::note
The `value` field holds either an external URL (when [`imageUploadUrl`](api/config/image-upload-url.md) is configured and the upload succeeds) or a base64 data URL (when `imageUploadUrl` is omitted and the image is inlined on the client). Handlers that process the source — for example, to rewrite the URL or validate the host — must account for both formats.
:::

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
