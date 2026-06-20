---
sidebar_label: undo
title: undo Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das undo-Event. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# undo

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Schaltfläche „Undo" in der Menüleiste/Toolbar gedrückt oder über Event-Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das „undo"-Event abonnieren
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
