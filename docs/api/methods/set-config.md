---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# setConfig()

### Description

@short: Updates the RichText editor with new configuration settings.

### Usage

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### Parameters

- `config` - (required) an object containing the RichText configuration options. Check out the complete list of properties [here](api/overview/properties_overview.md)

:::note
When using the `setConfig()` method, any previously set parameters that are not included in the new call will stay unchanged.
:::

### Example

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // other configuration properties
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**Change log:** The method was introduced in v2.0