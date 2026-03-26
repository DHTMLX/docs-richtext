---
sidebar_label: theme
title: theme Config
description: You can learn about the theme config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# theme

### Description

@short: Optional. Specifies the visual theme applied to the RichText editor

### Usage

~~~jsx {}
theme?: {
    name: string;
    fonts: boolean;
};
~~~

### Parameters

- `name` - (required) the name of the theme to apply
- `fonts` - (required) defines whether to load the fonts bundled with the theme

### Example

~~~jsx {3-6}
// initialize RichText
new richtext.Richtext("#root", {
    theme: {
        name: "dark",
        fonts: true
    }
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Configuration](guides/configuration.md)
