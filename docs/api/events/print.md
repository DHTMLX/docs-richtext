---
sidebar_label: print
title: print Event
description: You can learn about the print event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# print

### Description {#description}

@short: Fires when printing document

### Usage {#usage}

~~~jsx {}
"print": () => boolean | void;
~~~

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example {#example}

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration properties
});
// subscribe to the "print" event
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**Change log:** The event was added in v2.0
