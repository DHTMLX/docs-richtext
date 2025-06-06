---
sidebar_label: api.getReactiveState()
title: getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.getReactiveState()

### Description

@short: Gets an object with the reactive properties of RichText

### Usage

~~~jsx {}
api.getReactiveState(): object;
~~~

### Returns

The method returns an object with the following parameters:

~~~jsx {}
{
    ...
}
~~~  

### Example

~~~jsx {7-37}
// create RichText
const editor = new richtext.Richtext("#root", {
    ...
});
// get the Reactive State of RichText
const state = editor.api.getReactiveState();
~~~

**Change log:**
