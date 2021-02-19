---
sidebar_label: Event Handling
title: Event Handling
---

## Attaching Event Listeners

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

## Detaching Event Listeners

To detach events, use [richtext.events.detach()](api/events_bus.md#detach):

~~~js
var change = richtext.events.on("Change", function(action, canUndo, canRedo){
     // your code here
});
richtext.events.detach(change);
~~~

## Calling Events

To call events, use [richtext.events.fire()](api/events_bus.md#fire):

~~~js
richtext.events.fire("name", args);
// where args is an array of arguments
~~~

The list of events is available in the [API section](api/events.md).

