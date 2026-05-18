---
sidebar_label: clear-text-format
title: clear-text-format Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das clear-text-format-Event. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# clear-text-format

### Description

@short: Wird ausgelöst, wenn eine Textformatierung über die Menü-/Symbolleiste oder Event-Bus-Methoden entfernt wird

### Usage

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
Zur Behandlung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "clear-text-format" event
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// clear text format
editor.api.exec("clear-text-format", {});
~~~

**Change log:** Das Event wurde in v2.0 hinzugefügt
