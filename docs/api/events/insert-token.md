---
sidebar_label: insert-token
title: insert-token Event
description: You can learn about the insert-token event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# insert-token

### Description

@short: Fires after the user picks a suggestion item and RichText inserts it as a token

The `insert-token` event fires after the user picks an item from a trigger dropdown (mentions, tags, or any custom trigger you set up through the [`triggers`](api/config/triggers.md) property).

### Usage

~~~jsx {}
"insert-token": ({
    data: {
        id?: string | number,
        label?: string,
        url?: string,
        // ...any custom fields from the trigger's data source
    },
    trigger: string,
    showTrigger?: boolean,
    action?: (item) => void
}) => boolean | void;
~~~

### Parameters

The callback of the `insert-token` event receives an object with the following fields:

- `data` - the picked suggestion item. Contains the `id`, `label`, and `url` of the item, as well as any custom fields you added to the trigger's `data` source
- `trigger` - the trigger character that opened the dropdown (for example, `"@"` or `"#"`)
- `showTrigger` - when `false`, RichText inserts only `label`; otherwise the widget also shows the trigger character (default)
- `action` - a custom action defined for the matching [trigger](api/config/triggers.md). When set, the parameter takes priority over token insertion: RichText removes the typed text (the trigger character and the query) and calls `action(data)` instead of inserting a token. The `showTrigger` parameter has no effect in this case

:::info
To handle internal events, use [**Event Bus methods**](api/overview/event_bus_methods_overview.md).
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-token" event
editor.api.on("insert-token", ({ data, trigger, showTrigger }) => {
    console.log(`Inserted ${trigger}${data.label} (id: ${data.id})`);
});
~~~

**Change log:** The event was added in v2.1

**Related articles:** [Mentions and tags](guides/mentions_and_tags.md)
