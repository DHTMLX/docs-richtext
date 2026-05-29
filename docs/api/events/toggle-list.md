---
sidebar_label: toggle-list
title: toggle-list Event
description: You can learn about the toggle-list event in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# toggle-list

### Description

@short: Fires when the user toggles a list on the selected blocks

The `toggle-list` event powers the context-aware bulleted/numbered list buttons. Instead of inserting a new list, the event inspects the current selection and picks one of four behaviors automatically:

| Mode        | When it fires                                                   | Result                                                              |
| ----------- | --------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Wrap**    | The selection covers only paragraphs                            | Each paragraph becomes a list item inside one new list container    |
| **Unwrap**  | Every covered item is in a list of the clicked type             | The items revert to paragraphs; the list container is removed       |
| **Convert** | Every covered item is in a list, but at least one of the lists is of the other type | The list flips its type (bulleted ↔ numbered) in place         |
| **Mixed**   | The selection mixes paragraphs and list items                   | Paragraphs become items and everything joins one list of the type   |

### Usage

~~~jsx {}
"toggle-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parameters

The callback of the `toggle-list` event can take an object with the following parameter:

- `type` - the type of the list to toggle. You can specify the following values:
    - `"bulleted"` - bulleted (unordered) list
    - `"numbered"` - numbered (ordered) list

:::info
To handle inner events, use [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-list" event
editor.api.on("toggle-list", (obj) => {
    console.log(obj.type);
    console.log("The list was toggled");
});
~~~

**Change log:** The event was added in v2.0.6
