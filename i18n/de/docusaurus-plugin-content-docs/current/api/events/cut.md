---
sidebar_label: cut
title: cut Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das cut-Event. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# cut

### Description

@short: Wird ausgelöst, wenn ausgewählter Text ausgeschnitten wird

### Usage

~~~jsx {}
"cut": () => boolean | void;
~~~

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "cut" event
editor.api.on("cut", () => {
    console.log("Selected text was cut");
});
~~~

**Change log:** Das Event wurde in v2.0 hinzugefügt
