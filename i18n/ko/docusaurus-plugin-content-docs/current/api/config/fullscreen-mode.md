---
sidebar_label: fullscreenMode
title: fullscreenMode Config
description: You can learn about the fullscreenMode config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# fullscreenMode

### Description {#description}

@short: Optional. Enables the RichText fullscreen mode

### Usage {#usage}

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### Default config {#default-config}

~~~jsx
fullscreenMode: false;
~~~

### Example {#example}

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)
