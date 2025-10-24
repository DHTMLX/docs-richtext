---
sidebar_label: show-popup
title: show-popup Event
description: Explore the show-popup event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code examples, live demos, and download a free 30-day trial of DHTMLX RichText.
---

# show-popup

### Description

@short: Triggered when a popup is displayed or hidden

### Usage

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Parameters

The callback for the **show-popup** event receives an object with these properties:

- `type` - specifies the popup type
- `image` - indicates whether the current cursor is over an image or not

:::info
To manage inner events, the [**Event Bus methods**](api/overview/event_bus_methods_overview.md) can be utilized
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

**Change log:** This event was introduced in v2.0