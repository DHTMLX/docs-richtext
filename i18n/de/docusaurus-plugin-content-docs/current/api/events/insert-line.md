---
sidebar_label: insert-line
title: insert-line Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-line-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-line

### Beschreibung

@short: Wird ausgelöst, wenn eine horizontale Linie eingefügt wird

### Verwendung

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info
Zur Verarbeitung der internen Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-line" event
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
