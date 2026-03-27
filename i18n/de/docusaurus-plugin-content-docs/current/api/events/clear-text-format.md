---
sidebar_label: clear-text-format
title: clear-text-format Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das clear-text-format-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# clear-text-format

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Textformatierung über menubar/toolbar oder Event-Bus-Methoden entfernt wird

### Verwendung {#usage}

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "clear-text-format"-Ereignis abonnieren
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// Textformatierung entfernen
editor.api.exec("clear-text-format", {});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
