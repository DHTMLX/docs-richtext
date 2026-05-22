---
sidebar_label: insert-list
title: insert-list Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-list-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-list

### Description

@short: Fires when inserting list

### Usage

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parameters

Der Callback des **insert-list**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `type` - der Typ der eingefügten Liste. Folgende Werte sind möglich:
    - `"bulleted"` - Aufzählungsliste
    - `"numbered"` - nummerierte Liste

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

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
