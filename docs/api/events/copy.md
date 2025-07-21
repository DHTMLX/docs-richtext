---
sidebar_label: copy
title: copy Event
description: You can learn about the copy event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# copy

### Description

@short: Fires when copying selected text

### Usage

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// subscribe on the "copy" event
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**Change log:** The event was added in v2.0
