---
sidebar_label: set-text-color
title: set-text-color Ereignis
description: Sie können mehr über das set-text-color-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-text-color

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Textfarbe und/oder eine Texthintergrundfarbe festgelegt wird

### Verwendung {#usage}

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Parameter {#parameters}

Der Callback des **set-text-color**-Ereignisses kann ein Objekt mit folgenden Parametern entgegennehmen:

- `color` - eine Textfarbe
- `background` - eine Texthintergrundfarbe

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-14}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „set-text-color"-Ereignis abonnieren
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
