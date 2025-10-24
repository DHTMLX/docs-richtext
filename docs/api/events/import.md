---
sidebar_label: import
title: import Event
description: Discover the import event in the DHTMLX JavaScript RichText library documentation. Explore developer guides, API references, try out code samples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# import

### Description

@short: Triggered after selecting the "Import" option from the menubar or through Event Bus methods.

### Usage

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Parameters

The callback for the **import** event accepts an object with the following parameter:

- `html` - a string containing HTML content

:::info
To manage internal events, you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen for the "import" event
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// perform an import
editor.api.exec("import", {
    html: "<h2>some value</h2>" // internally calls setValue
});
~~~

**Change log:** This event was introduced in v2.0
