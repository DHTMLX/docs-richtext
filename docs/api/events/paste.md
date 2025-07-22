---
sidebar_label: paste
title: paste Event
description: You can learn about the paste event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# paste

### Description

@short: Fires when pasting text

### Usage

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info
For handling inner events you can use [**Event Bus methods**](/category/event-bus-methods/)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe on the "paste" event
editor.api.on("paste", () => {
    console.log("Selected text was pasted");
});
~~~

**Change log:** The event was added in v2.0
