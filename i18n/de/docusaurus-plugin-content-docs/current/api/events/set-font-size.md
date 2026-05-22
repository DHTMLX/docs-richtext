---
sidebar_label: set-font-size
title: set-font-size Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-font-size-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-font-size

### Description

@short: Wird ausgelöst, wenn eine Schriftgröße gesetzt wird

### Usage

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Parameters

Der Callback des **set-font-size**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `fontSize` - die anzuwendende Schriftgröße

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// apply new font size
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Change log:** Das Event wurde in v2.0 hinzugefügt
