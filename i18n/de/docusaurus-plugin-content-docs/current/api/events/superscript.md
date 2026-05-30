---
sidebar_label: superscript
title: superscript Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das superscript-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# superscript

### Beschreibung

@short: Wird ausgelöst, wenn die Schaltfläche „Hochgestellt" in der Menüleiste/Symbolleiste oder über Event-Bus-Methoden gedrückt wird

### Verwendung

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
Zur Verarbeitung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "superscript"-Event abonnieren
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// das "superscript"-Event auslösen
editor.api.exec("superscript", {});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
