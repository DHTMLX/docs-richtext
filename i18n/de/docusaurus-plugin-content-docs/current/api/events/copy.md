---
sidebar_label: copy
title: copy Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das copy-Event. Lesen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# copy

### Description

@short: Wird ausgelöst, wenn ausgewählter Text kopiert wird

### Usage

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "copy" event
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**Change log:** Das Event wurde in v2.0 hinzugefügt
