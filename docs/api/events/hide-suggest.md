---
sidebar_label: hide-suggest
title: hide-suggest Event
description: You can learn about the hide-suggest event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# hide-suggest

### Description

@short: Fires when the suggestion dropdown closes

The event fires when any of these happen:

- the user picks an item from the dropdown
- the user presses `Escape`
- the cursor leaves the trigger context (for example, on `Backspace` past the trigger character)
- the current query returns no matches

### Usage

~~~jsx {}
"hide-suggest": () => boolean | void;
~~~

### Parameters

The `hide-suggest` event callback does not receive any parameters.

:::info
To handle internal events, use [**Event Bus methods**](api/overview/event_bus_methods_overview.md).
:::

### Example

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "hide-suggest" event
editor.api.on("hide-suggest", () => {
    console.log("Suggestion dropdown closed");
});
~~~

**Change log:** The event was added in v2.1

**Related sample:** [RichText. Mentions, tags, and async lookup](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

**Related articles:** [Mentions and tags](guides/mentions_and_tags.md)
