---
sidebar_label: set-font-family
title: set-font-family Event
description: You can learn about the set-font-family event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# set-font-family

### Description

@short: Triggered when the font family is being set

### Usage

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Parameters

The callback for the **set-font-family** event receives an object containing the following parameter:

- `fontFamily` - the font family to apply. The available options include: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info
To handle internal events, you can use the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "set-font-family" event
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// set a new font family
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**Change log:** This event was introduced in v2.0