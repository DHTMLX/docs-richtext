---
sidebar_label: layoutMode
title: layoutMode Config
description: You can learn about the layoutMode config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# layoutMode

### Description

@short: Optional. Specifies the layout mode for the main editor area

### Usage

~~~jsx {}
layoutMode: "classic" | "document";
~~~

The `"classic"` mode fills the entire edit area. The `"document"` mode displays the edit area as a document page.

### Default config

~~~jsx
layoutMode: "classic";
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // initializes RichText with "document" mode by default
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0 instead of the removed `mode` property

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
