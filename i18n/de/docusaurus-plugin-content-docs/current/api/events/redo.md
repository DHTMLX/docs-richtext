---
sidebar_label: redo
title: redo Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das redo-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# redo

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Schaltfläche „Redo" in der Menüleiste/Toolbar gedrückt oder über Event-Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info[Info]
Zum Behandeln interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das „redo"-Event abonnieren
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
