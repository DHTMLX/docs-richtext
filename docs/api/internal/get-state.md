---
sidebar_label: api.getState()
title: getState Method
description: You can learn about the getState method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.getState()

### Description

@short: Gets an object with the StateStore properties of RichText

### Usage

~~~jsx {}
api.getState(): object;
~~~

### Returns

The method returns an object with the following parameters:

~~~jsx {}
{     
    cursorState: {},
    defaultStyles: {},
    document: {},
    fullscreen: boolean,
    history: []
    layoutMode: string,
    popup: any,
    selection: {}
}
~~~

### Example

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration parameters
});
// get the State of RichText
const state = editor.api.getState();
console.log(state);
~~~

**Change log:** The method was added in v2.0
