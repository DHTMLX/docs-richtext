---
sidebar_label: create-new
title: create-new Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über das create-new-Event. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# create-new

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Option „Neu" in der Menüleiste oder über Event-Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des `create-new`-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `reset` - setzt den Verlauf zurück, wenn eine neue Datei erstellt wird

:::info[Info]
Für die Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das „create-new"-Event abonnieren
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// neue Datei erstellen und den Verlauf zurücksetzen
editor.api.exec("create-new", { reset: true });
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
