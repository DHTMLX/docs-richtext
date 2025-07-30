---
sidebar_label: show-popup
title: show-popup Event
description: You can learn about the show-popup event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# show-popup

### Description

@short: Fires when a popup is shown/hidden

### Usage

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Parameters

The callback of the **show-popup** event can take an object with the following parameters:

- `type` - a type of the popup
- `image` - provides access to additional context (is the current cursor pointing at an image or not)

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "show-popup" event
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// show-popup the text to the left
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**Change log:** The event was added in v2.0
