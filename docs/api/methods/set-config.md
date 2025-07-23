---
sidebar_label: setConfig()
title: setConfig Method
description: You can learn about the setConfig method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# setConfig()

### Description

@short: Applies new configuration parameters to RichText

### Usage

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### Parameters

- `config` - (required) the object of RichText configuration parameters. See the full list of properties [here](/category/richtext-properties/)

:::note
The `setConfig()` method preserves all the previously set parameters that are not explicitly provided in the `setConfig()` method call.
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

**Change log:** The method was added in v2.0
