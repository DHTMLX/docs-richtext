---
sidebar_label: outdent
title: outdent Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das outdent-Event. Entdecken Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# outdent

### Description

@short: Wird ausgelöst, wenn die Blockeinrückung verringert wird

### Usage

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Parameters

Der Callback des **outdent**-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `step` - der Schritt, um den die Einrückung verringert wurde

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "outdent" event
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**Change log:** The event was added in v2.0
