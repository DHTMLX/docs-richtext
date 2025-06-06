---
sidebar_label: api.exec()
title: exec Method
description: You can learn about the exec method in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# api.exec()

### Description

@short: Allows triggering the inner events

### Usage

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameters

- `event` - (required) an event to be fired 
- `config` - (required) the config object with parameters (see the event to be fired)

### Events

:::info
The full list of the RichText internal events can be found [**here**](api/overview/main_overview.md/#richtext-events)
:::

### Example

~~~jsx {7,9-12}
// create RichText
const editor = new richtext.Richtext("#root", {
    columns,
    cards
});
// select the card with the 1 ID
editor.api.exec("select-card", { id: 1 });
// add new card without sending changes to the server
editor.api.exec("add-card", { 
    columnId: "backlog",
    skipProvider: true, 
});
~~~

**Related sample:** [RichText. Preserve sorting](https://snippet.dhtmlx.com/74nyuv14?tag=richtext)
