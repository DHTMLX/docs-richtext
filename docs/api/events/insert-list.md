---
sidebar_label: insert-list
title: insert-list Event
description: Explore the insert-list event in the DHTMLX JavaScript RichText library documentation. Check out developer guides, API references, try code samples and live demos, and get a free 30-day trial of DHTMLX RichText.
---

# insert-list

### Description

@short: Triggered when a list is inserted

### Usage

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parameters

The callback for the **insert-list** event receives an object with this parameter:

- `type` - indicates the kind of list that was inserted. Possible values are:
    - `"bulleted"` - a bulleted list
    - `"numbered"` - a numbered list

:::info
To manage internal events, you can refer to the [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// listen to the "insert-list" event
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**Change log:** This event was introduced in version 2.0
