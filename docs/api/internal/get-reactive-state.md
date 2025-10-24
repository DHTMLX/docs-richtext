---
sidebar_label: api.getReactiveState()
title: getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.getReactiveState()

### Description

@short: Provides an object containing the reactive properties of RichText.

### Usage

~~~jsx {}
api.getReactiveState(): object;
~~~

### Returns

This method returns an object with the following properties:

~~~jsx {}
{
    cursorState: { subscribe: any },
    defaultStyles {...},
    document {...},
    fullscreen {...},
    history {...},
    layoutMode {...},
    popup {...},
    selection {...}
}
~~~  

### Example

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// retrieve the Reactive State of RichText
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**Change log:** This method was introduced in version 2.0