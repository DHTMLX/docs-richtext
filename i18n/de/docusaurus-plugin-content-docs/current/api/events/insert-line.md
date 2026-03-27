---
sidebar_label: insert-line
title: insert-line Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-line-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-line

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine horizontale Linie eingefügt wird

### Verwendung {#usage}

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "insert-line"-Ereignis abonnieren
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
