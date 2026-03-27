---
sidebar_label: api.detach()
title: on Method
description: You can learn about the on method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.detach()

### Description {#description}

@short: Allows removing/detaching event handlers

### Usage {#usage}

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parameters {#parameters}

- `tag` - (required) the name of the action tag

### Events {#events}

:::info
The full list of RichText internal events can be found [**here**](api/overview/events_overview.md)
:::

### Example {#example}

~~~jsx {6-8,10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**Change log:** The method was updated in v2.0. The `name` and `context` parameters were removed
