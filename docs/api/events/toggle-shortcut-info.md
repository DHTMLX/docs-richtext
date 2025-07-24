---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Event
description: You can learn about the toggle-shortcut-info event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# toggle-shortcut-info

### Description

@short: Fires when toggling the shortcut info

### Usage

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Parameters

The callback of the **toggle-shortcut-info** event can take an object with the following parameter:

- `mode` - enables a shortcut info

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
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
    console.log("The shortcut info was changed");
});
// enable the shortcut info
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Change log:** The event was added in v2.0
