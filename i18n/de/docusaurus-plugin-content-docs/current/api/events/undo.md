---
sidebar_label: rückgängig
title: undo Event
description: Entdecken Sie das undo Event in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# undo

### Beschreibung

@short: Wird ausgelöst, wenn die Schaltfläche "Undo" in der Menüleiste/Toolbar angeklickt oder über Event Bus Methoden aktiviert wird.

### Verwendung

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info
Interne Events können mit [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwaltet werden.
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "undo" Event hören
editor.api.on("undo", () => {
    console.log("Undo-Operation wurde durchgeführt");
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt.
