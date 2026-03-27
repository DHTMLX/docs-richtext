---
sidebar_label: superscript
title: superscript Ereignis
description: Sie können mehr über das superscript-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# superscript

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Schaltfläche „Superscript" in der menubar/toolbar gedrückt oder über Event Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „superscript"-Ereignis abonnieren
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// Das „superscript"-Ereignis auslösen
editor.api.exec("superscript", {});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
