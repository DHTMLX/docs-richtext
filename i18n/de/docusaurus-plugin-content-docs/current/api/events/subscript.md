---
sidebar_label: subscript
title: subscript Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das subscript-Event. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# subscript

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Schaltfläche „Subscript" in der Menüleiste/Toolbar oder über Event-Bus-Methoden gedrückt wird

### Verwendung {#usage}

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "subscript"-Event abonnieren
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// das "subscript"-Event auslösen
editor.api.exec("subscript", {});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
