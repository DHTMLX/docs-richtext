---
sidebar_label: api.getReactiveState()
title: getReactiveState Method
description: You can learn about the getReactiveState method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.getReactiveState()

### Description {#description}

@short: Returns an object with the reactive properties of RichText

### Usage {#usage}

~~~jsx {}
api.getReactiveState(): object;
~~~

### Returns {#returns}

The method returns an object with the following parameters:

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

### Example {#example}

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// get the Reactive State of RichText
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**Change log:** The method was added in v2.0
