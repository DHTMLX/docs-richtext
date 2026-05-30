---
sidebar_label: insert-line
title: insert-line Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-line-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
---

# insert-line

### Beschreibung

@short: Wird ausgelöst, wenn eine horizontale Linie eingefügt wird

### Verwendung

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info
Zur Behandlung der internen Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "insert-line"-Event abonnieren
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
