---
sidebar_label: superscript
title: superscript Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das superscript-Event. Entwicklerhandbücher und API-Referenz, Codebeispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText stehen zum Download bereit.
---

# superscript

### Description

@short: Wird ausgelöst, wenn die Schaltfläche "Superscript" in der Menüleiste/Toolbar gedrückt oder über Event-Bus-Methoden aufgerufen wird

### Usage

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
Zur Verarbeitung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "superscript" event
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// trigger the "superscript" event
editor.api.exec("superscript", {});
~~~

**Change log:** Das Event wurde in v2.0 hinzugefügt
