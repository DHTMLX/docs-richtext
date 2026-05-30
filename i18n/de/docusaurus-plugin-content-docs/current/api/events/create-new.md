---
sidebar_label: create-new
title: create-new Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das create-new Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText stehen zum Download bereit.
---

# create-new

### Beschreibung

@short: Wird ausgelöst, wenn die Option „Neu" in der Menüleiste oder über Event Bus-Methoden aufgerufen wird

### Verwendung

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parameter

Der Callback des **create-new** Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `reset` - setzt den Verlauf beim Erstellen einer neuen Datei zurück

:::info
Zur Verarbeitung interner Events können [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwendet werden
:::

### Beispiel

~~~jsx {5-10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "create-new" Event abonnieren
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// neue Datei erstellen und Verlauf zurücksetzen
editor.api.exec("create-new", { reset: true });
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
