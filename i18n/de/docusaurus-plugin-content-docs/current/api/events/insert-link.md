---
sidebar_label: insert-link
title: insert-link Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-link-Event. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-link

### Description

@short: Wird ausgelöst, wenn ein Link eingefügt wird

### Usage

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Parameters

Der Callback des **update-link**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `url` - die einzufügende URL

:::info
Zur Behandlung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-link" event
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Change log:** The event was added in v2.0
