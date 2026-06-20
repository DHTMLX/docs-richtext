---
sidebar_label: superscript
title: superscript Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das superscript-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
---

# superscript

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Schaltfläche „Hochgestellt" in der Menüleiste/Toolbar oder über Event-Bus-Methoden gedrückt wird

### Verwendung {#usage}

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info[Info]
Zur Behandlung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „superscript"-Event abonnieren
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// Das „superscript"-Event auslösen
editor.api.exec("superscript", {});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
