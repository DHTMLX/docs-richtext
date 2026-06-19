---
sidebar_label: clear-text-format
title: clear-text-format Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über das clear-text-format-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos – laden Sie außerdem eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# clear-text-format

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Textformatierung über die Menüleiste/Symbolleiste oder Event-Bus-Methoden aufgehoben wird

### Verwendung {#usage}

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das "clear-text-format"-Event abonnieren
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// Textformatierung aufheben
editor.api.exec("clear-text-format", {});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
