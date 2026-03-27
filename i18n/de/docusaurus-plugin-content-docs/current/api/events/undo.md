---
sidebar_label: undo
title: undo Ereignis
description: Sie können mehr über das undo-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# undo

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Schaltfläche „Undo" in der menubar/toolbar gedrückt oder über Event Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „undo"-Ereignis abonnieren
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
