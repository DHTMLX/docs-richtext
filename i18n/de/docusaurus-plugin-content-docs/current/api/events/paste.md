---
sidebar_label: paste
title: paste Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das paste-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# paste

### Beschreibung {#description}

@short: Wird ausgelöst, wenn Inhalt eingefügt wird

### Verwendung {#usage}

~~~jsx {}
"paste": () => boolean | void;
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
// das "paste"-Ereignis abonnieren
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
