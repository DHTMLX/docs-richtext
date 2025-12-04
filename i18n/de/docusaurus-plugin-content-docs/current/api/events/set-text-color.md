---
sidebar_label: set-text-color
title: set-text-color Event
description: Entdecken Sie das set-text-color Event in der DHTMLX JavaScript RichText Bibliothek Dokumentation. Finden Sie Entwickleranleitungen, API-Referenzen, Codebeispiele, Live-Demos und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# set-text-color

### Beschreibung

@short: Wird ausgelöst, wenn eine Textfarbe und/oder Hintergrundfarbe angewendet wird

### Verwendung

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Parameter

Der Callback für das **set-text-color** Event erhält ein Objekt mit folgenden Eigenschaften:

- `color` - die Textfarbe
- `background` - die Hintergrundfarbe des Textes

:::info
Um interne Events zu verwalten, können Sie die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) konsultieren.
:::

### Beispiel

~~~jsx {5-14}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "set-text-color" Event hören
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("Textfarbe und/oder Hintergrundfarbe wurden aktualisiert");
});
// Textfarbe und Hintergrund setzen
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
