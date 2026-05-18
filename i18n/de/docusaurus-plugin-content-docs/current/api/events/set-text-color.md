---
sidebar_label: set-text-color
title: set-text-color Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-text-color-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-text-color

### Beschreibung

@short: Wird ausgelöst, wenn eine Textfarbe und/oder eine Texthintergrundfarbe gesetzt wird

### Verwendung

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Parameter

Der Callback des **set-text-color**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `color` - eine Textfarbe
- `background` - eine Texthintergrundfarbe

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-color" event
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("The text color and/or background text color were changed");
});
// apply text color and background
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
