---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Event
description: You can learn about the toggle-fullscreen-mode event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# toggle-fullscreen-mode

### Description

@short: Fires when toggling the full screen mode

### Usage

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Parameters

The callback of the **toggle-fullscreen-mode** event can take an object with the following parameter:

- `mode` - enables a fullscreen mode

:::info
For handling the inner events you can use the [**Event Bus methods**](/category/event-bus-methods/)
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

**Change log:** The event was added in v2.0
