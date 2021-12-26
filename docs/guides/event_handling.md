---
sidebar_label: Event handling
title: Event handling
description: This guide includes brief instructions on how to work with event listeners and call events in DHTMLX Rich Text Editor.
---

## Attaching event listeners

You can attach event listeners with the [richtext.events.on()](api/events_bus.md#on) method:

~~~js
richtext.events.on("Change", function(action, canUndo, canRedo){
    // your code here
});
~~~

**Related sample:** [RichText. Events](https://snippet.dhtmlx.com/sb5qipjz)

:::note
The names of events are case-insensitive.
:::

## Detaching event listeners

To detach events, use [richtext.events.detach()](api/events_bus.md#detach):

~~~js
var change = richtext.events.on("Change", function(action, canUndo, canRedo){
     // your code here
});
richtext.events.detach(change);
~~~

## Calling events

To call events, use [richtext.events.fire()](api/events_bus.md#fire):

~~~js
richtext.events.fire("name", args);
// where args is an array of arguments
~~~

The list of events is available in the [API section](api/events.md).

