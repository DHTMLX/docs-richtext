---
sidebar_label: destructor()
title: destructor Method
description: You can learn about the destructor method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# destructor()

### Description

@short: Removes all HTML elements of RichText, and detaches all related events

### Usage

~~~jsx {}
destructor(): void;
~~~

### Example

~~~jsx {4-5}
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// remove RichText
editor.destructor();
~~~
