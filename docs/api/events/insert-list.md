---
sidebar_label: insert-list
title: insert-list Event
description: You can learn about the insert-list event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# insert-list

### Description {#description}

@short: Fires when inserting list

### Usage {#usage}

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parameters {#parameters}

The callback of the **insert-list** event can take an object with the following parameter:

- `type` - the type of the inserted list. You can specify the following values:
    - `"bulleted"` - bulleted list
    - `"numbered"` - numbered list

:::info
For handling inner events you can use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example {#example}

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-list" event
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**Change log:** The event was added in v2.0
