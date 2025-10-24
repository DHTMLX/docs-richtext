---
sidebar_label: layoutMode
title: layoutMode Config
description: Explore the layoutMode configuration in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, code samples, live demos, and download a free 30-day trial of DHTMLX RichText.
---

# layoutMode

### Description

@short: Optional. Defines the layout style for the main editor area.

### Usage

~~~jsx {}
layoutMode: "classic" | "document";
~~~

The `"classic"` mode makes the editing area span the entire page. The `"document"` mode simulates actual document sizes, using formats like A4, A5, A6, and A7.

### Default config

~~~jsx
layoutMode: "classic";
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // sets RichText to use "document" mode by default
    // other configuration properties
});
~~~

**Change log:** This property was introduced in v2.0, replacing the older `mode` property.

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
