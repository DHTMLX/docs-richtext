---
sidebar_label: subscript
title: subscript Ereignis
description: Sie können mehr über das subscript-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# subscript

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Schaltfläche „Subscript" in der menubar/toolbar gedrückt oder über Event Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „subscript"-Ereignis abonnieren
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// Das „subscript"-Ereignis auslösen
editor.api.exec("subscript", {});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
