---
sidebar_label: create-new
title: create-new Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das create-new-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# create-new

### Description

@short: Wird ausgelöst, wenn die Option „Neu" in der Menüleiste oder über Event-Bus-Methoden aufgerufen wird

### Usage

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parameters

Der Callback des **create-new**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `reset` - setzt den Verlauf beim Erstellen einer neuen Datei zurück

:::info
Zur Verarbeitung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "create-new" event
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// create new file and reset the history
editor.api.exec("create-new", { reset: true });
~~~

**Change log:** The event was added in v2.0
