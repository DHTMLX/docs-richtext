---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Event
description: You can learn about the toggle-shortcut-info event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# toggle-shortcut-info

### Description

@short: Triggered when the shortcut info is toggled

### Usage

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Parameters

The callback for the **toggle-shortcut-info** event receives an object with the following property:

- `mode` - controls the shortcut info display; `true` to show the shortcut info popup, `false` to hide it

:::info
To manage internal events, you can refer to the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-shortcut-info" event
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// enable the shortcut info
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Change log:** The event was introduced in v2.0