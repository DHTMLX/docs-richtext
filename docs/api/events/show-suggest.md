---
sidebar_label: show-suggest
title: show-suggest Event
description: You can learn about the show-suggest event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# show-suggest

### Description

@short: Fires when the suggestion dropdown opens for a configured trigger

The event fires after RichText resolves a non-empty list of items for the current trigger, just before the dropdown opens. Intercept the event to adjust the items, move the dropdown, or cancel it.

### Usage

~~~jsx {}
"show-suggest": ({
    trigger: string,
    query: string,
    items: Array<{ id: string, label: string, url: string }>,
    pos: DOMRect
}) => boolean | void;
~~~

### Parameters

The callback of the `show-suggest` event receives an object with the following fields:

- `trigger` - the trigger character that opened the dropdown
- `query` - the text typed after the trigger character (used to filter `items`)
- `items` - the resolved (and already filtered) list of suggestion items
- `pos` - a `DOMRect` describing the cursor position; used to place the dropdown on screen

:::info
To handle internal events, use [**Event Bus methods**](api/overview/event_bus_methods_overview.md).
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// override the suggestion list before the dropdown opens
editor.api.intercept("show-suggest", (state) => {
    if (state.trigger === "@" && state.query === "") {
        return { ...state, items: state.items.slice(0, 5) };
    }
});
~~~

**Change log:** The event was added in v2.1
