---
sidebar_label: import
title: import Event
description: You can learn about the import event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# import

### Description

@short: Fires after pressing the "Import" option in the menubar or via Event Bus methods

### Usage

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Parameters

The callback of `import` event can take an object with the following parameter:

- `html` - a text value in the html format

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "import" event
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// import new value
editor.api.exec("import", {
    html: "<h2>some value</h2>" // simply calls setValue
});
~~~

**Change log:** The event was added in v2.0
