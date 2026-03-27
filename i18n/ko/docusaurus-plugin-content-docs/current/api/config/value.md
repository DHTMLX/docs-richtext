---
sidebar_label: value
title: value Config
description: You can learn about the value config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# value

### Description {#description}

@short: Optional. Specifies the initial value (content) displayed within the editor area of RichText

:::tip
If you want to set the value (content) using custom format, use the built-in [`setValue()`](api/methods/set-value.md) method.
:::

### Usage {#usage}

~~~jsx {}
value?: string; 
~~~

### Example {#example}

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // sets the default value (HTML format)
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
