---
sidebar_label: set-font-family
title: set-font-family Event
description: You can learn about the set-font-family event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-font-family

### Description {#description}

@short: Fires when setting a font family

### Usage {#usage}

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Parameters {#parameters}

The callback of the **set-font-family** event can take an object with the following parameter:

- `fontFamily` - a font family to be applied. The following fonts are available: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example {#example}

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-family" event
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// apply new font family
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**Change log:** The event was added in v2.0
