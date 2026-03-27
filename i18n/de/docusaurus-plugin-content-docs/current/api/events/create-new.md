---
sidebar_label: create-new
title: create-new Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das create-new-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# create-new

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Option "Neu" in der menubar ausgewählt oder über Event-Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **create-new**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `reset` - setzt den Verlauf beim Erstellen einer neuen Datei zurück

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "create-new"-Ereignis abonnieren
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// neue Datei erstellen und Verlauf zurücksetzen
editor.api.exec("create-new", { reset: true });
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
