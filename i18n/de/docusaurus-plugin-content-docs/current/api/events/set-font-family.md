---
sidebar_label: set-font-family
title: set-font-family Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-font-family-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
---

# set-font-family

### Description

@short: Wird ausgelöst, wenn eine Schriftfamilie festgelegt wird

### Usage

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Parameters

Der Callback des **set-font-family**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `fontFamily` - eine anzuwendende Schriftfamilie. Folgende Schriftarten sind verfügbar: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info
Zum Verarbeiten interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-family" event
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// apply new font family
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**Change log:** The event was added in v2.0
