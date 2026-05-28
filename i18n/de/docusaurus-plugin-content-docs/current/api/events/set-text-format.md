---
sidebar_label: set-text-format
title: set-text-format Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-text-format-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-text-format

### Beschreibung

@short: Wird ausgelöst, wenn ein Textformat gesetzt wird

### Verwendung

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info
Zur Behandlung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Parameter

Der Callback des **set-text-format**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `bold` - fettes Textformat
- `italic` - kursives Textformat
- `strike` - durchgestrichenes Textformat
- `underline` - unterstrichenes Textformat

### Beispiel

~~~jsx {5-14}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "set-text-format"-Event abonnieren
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// das "italic"- und fette Textformat anwenden
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
