---
sidebar_label: subscript
title: subscript Event
description: Informationen zum subscript-Event finden Sie in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# subscript

### Beschreibung

@short: Wird ausgelöst, wenn die Schaltfläche „Subscript" in der Menü- oder Symbolleiste oder über Event-Bus-Methoden gedrückt wird

### Verwendung

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
Zur Behandlung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

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
