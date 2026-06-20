---
sidebar_label: print
title: print Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das print-Event. Entdecken Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# print

### Beschreibung {#description}

@short: Wird beim Drucken des Dokuments ausgelöst

### Verwendung {#usage}

~~~jsx {}
"print": () => boolean | void;
~~~

:::info[Info]
Zur Behandlung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
// Konfigurationseigenschaften
});
// das "print"-Event abonnieren
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
