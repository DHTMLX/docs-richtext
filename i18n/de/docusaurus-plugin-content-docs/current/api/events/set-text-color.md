---
sidebar_label: set-text-color
title: set-text-color Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-text-color-Ereignis. Entwicklerhandbücher und API-Referenz, Codebeispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
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

Der Callback des **set-text-color**-Ereignisses kann ein Objekt mit folgenden Parametern entgegennehmen:

- `color` - eine Textfarbe
- `background` - eine Texthintergrundfarbe

:::info
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-14}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "set-text-color"-Ereignis abonnieren
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("The text color and/or background text color were changed");
});
// Textfarbe und Hintergrund anwenden
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
