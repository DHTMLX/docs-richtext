---
sidebar_label: subscript
title: subscript Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das subscript-Event. Durchsuchen Sie Entwickleranleitungen und API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# subscript

### Description

@short: Wird ausgelöst, wenn die Schaltfläche „Subscript" in der Menüleiste/Toolbar gedrückt oder über Event-Bus-Methoden aufgerufen wird

### Usage

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
Zur Verarbeitung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "subscript" event
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// trigger the "subscript" event
editor.api.exec("subscript", {});
~~~

**Change log:** Das Event wurde in v2.0 hinzugefügt
