---
sidebar_label: insert-image
title: insert-image Event
description: Explore the insert-image event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code examples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# insert-image

### Description

@short: Triggered when an image is inserted

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

:::info
To manage internal events, you can refer to [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "insert-image" event
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**Change log:** This event was introduced in v2.0
