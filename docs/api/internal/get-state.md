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
    ...
}

### Example

~~~jsx {7-12}
// create RichText
const editor = new richtext.Richtext("#root", {
    ...
});
// get the State of RichText
const state = editor.api.getState();
console.log(...); // ...
//...
~~~

**Change log:**
