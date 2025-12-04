---
sidebar_label: toggle-layout-mode
title: toggle-layout-mode Event
description: You can learn about the toggle-layout-mode event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# toggle-layout-mode

### Description

@short: Triggered whenever the layout mode is switched

### Usage

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Parameters

The callback for the **toggle-layout-mode** event receives an object with these parameters:

- `mode` - indicates the layout mode. Available options are: `"classic" | "document"`

:::info
To handle internal events, you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-11}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-layout-mode" event
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("The layout mode was changed");
});
// set the "document" layout mode
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**Change log:** The event was introduced in v2.0
