---
sidebar_label: cut
title: cut Event
description: Sie können mehr über das cut-Event in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# cut

### Beschreibung

@short: Wird ausgelöst, wenn ausgewählter Text ausgeschnitten wird

### Verwendung

~~~jsx {}
"cut": () => boolean | void;
~~~

:::info
Zur Behandlung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "cut"-Event abonnieren
editor.api.on("cut", () => {
    console.log("Selected text was cut");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
