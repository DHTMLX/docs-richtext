---
sidebar_label: value
title: value Config
description: Explore the value config in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code samples and live demos, and download a free 30-day trial of DHTMLX RichText.
---

# value

### Description

@short: Optional. Defines the initial content shown inside the RichText editor area.

:::tip
To set the content using a custom format, use the built-in [`setValue()`](api/methods/set-value.md) method.
:::

### Usage

~~~jsx {}
value?: string; 
~~~

### Example

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // sets the default value (HTML format)
    // other configuration properties
});
~~~

**Change log:** This property was introduced in version 2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
