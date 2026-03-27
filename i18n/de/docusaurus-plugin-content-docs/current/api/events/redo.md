---
sidebar_label: redo
title: redo Ereignis
description: Sie können mehr über das redo-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# redo

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Schaltfläche „Redo" in der menubar/toolbar gedrückt oder über Event Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"redo": () => boolean | void;
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
// Das „redo"-Ereignis abonnieren
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
