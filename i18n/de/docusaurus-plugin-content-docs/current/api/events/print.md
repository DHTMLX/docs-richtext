---
sidebar_label: print
title: print Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das print-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# print

### Description

@short: Wird ausgelöst, wenn das Dokument gedruckt wird

### Usage

~~~jsx {}
"print": () => boolean | void;
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
// subscribe to the "print" event
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**Change log:** The event was added in v2.0
