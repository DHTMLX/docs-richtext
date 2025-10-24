---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Event
description: You can learn about the toggle-fullscreen-mode event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# toggle-fullscreen-mode

### Description

@short: Triggered when switching the full screen mode on or off

### Usage

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Parameters

The callback for the **toggle-fullscreen-mode** event accepts an object with the following property:

- `mode` - indicates whether fullscreen mode is enabled

:::info
To manage internal events, you can use the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-fullscreen-mode" event
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("The full screen mode was changed");
});
// enable the full screen mode
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**Change log:** The event was introduced in v2.0