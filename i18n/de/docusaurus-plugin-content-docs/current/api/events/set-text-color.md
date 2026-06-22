---
sidebar_label: set-text-color
title: set-text-color Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-text-color-Event. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-text-color

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Textfarbe und/oder eine Texthintergrundfarbe gesetzt wird

### Verwendung {#usage}

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Parameter {#parameters}

Der Callback des `set-text-color`-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `color` - eine Textfarbe
- `background` - eine Texthintergrundfarbe

:::info[Info]
Zur Verarbeitung der internen Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-14}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "set-text-color"-Event abonnieren
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

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
