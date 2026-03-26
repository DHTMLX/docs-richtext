---
sidebar_label: menubar
title: menubar Config
description: You can learn about the menubar config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# menubar

### Description

@short: Optional. Enables the top menubar of RichText

### Usage

~~~jsx {}
menubar?: boolean;
~~~

### Default config

~~~jsx
menubar: false;
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    menubar: true
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization with menubar](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)
