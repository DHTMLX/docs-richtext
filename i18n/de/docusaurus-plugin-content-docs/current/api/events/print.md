---
sidebar_label: print
title: print Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das print-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# print

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Dokument gedruckt wird

### Verwendung {#usage}

~~~jsx {}
"print": () => boolean | void;
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
// das "print"-Ereignis abonnieren
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
