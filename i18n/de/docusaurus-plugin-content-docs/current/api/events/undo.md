---
sidebar_label: undo
title: undo Event
description: Informationen zum undo-Event finden Sie in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# undo

### Beschreibung

@short: Wird ausgelöst, wenn die Schaltfläche „Rückgängig" in der Menü- oder Symbolleiste gedrückt wird oder über Event Bus-Methoden

### Verwendung

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info
Zur Behandlung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "undo"-Event abonnieren
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
