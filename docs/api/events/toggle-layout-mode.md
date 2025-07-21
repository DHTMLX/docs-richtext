---
sidebar_label: toggle-layout-mode
title: toggle-layout-mode Event
description: You can learn about the toggle-layout-mode event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# toggle-layout-mode

### Description

@short: Fires when toggling the layout mode

### Usage

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Parameters

The callback of the **toggle-layout-mode** event can take an object with the following parameters:

- `mode` - the layout mode. The following modes are available: `"classic" | "document"`

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-11}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "toggle-layout-mode" event
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("The layout mode was changed");
});
// set the "document" layout mode
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**Change log:** The event was added in v2.0
