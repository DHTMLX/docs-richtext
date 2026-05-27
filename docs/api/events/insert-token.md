---
sidebar_label: insert-token
title: insert-token Event
description: You can learn about the insert-token event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# insert-token

### Description

@short: Fires after the user picks a suggestion item and RichText inserts it as a token

The event fires after the user picks an item from a trigger dropdown (mentions, tags, or any custom trigger you set up through the [`triggers`](api/config/triggers.md) property).

### Usage

~~~jsx {}
"insert-token": ({
    id: string,
    label: string,
    url: string,
    trigger: string,
    showTrigger?: boolean
}) => boolean | void;
~~~

### Parameters

The callback of the `insert-token` event receives an object with the following fields:

- `id` - the id of the picked suggestion item
- `label` - the label of the picked item (the text inserted into the document)
- `url` - the url associated with the item (becomes the `href` attribute of the inserted token)
- `trigger` - the trigger character that opened the dropdown (for example, `"@"` or `"#"`)
- `showTrigger` - when `false`, RichText inserts only `label`; otherwise it also shows the trigger character (default)

:::info
To handle internal events, use [**Event Bus methods**](api/overview/event_bus_methods_overview.md).
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-token" event
editor.api.on("insert-token", (obj) => {
    console.log(obj);
    console.log(`Inserted ${obj.trigger}${obj.label} (id: ${obj.id})`);
});
~~~

**Change log:** The event was added in v2.1
