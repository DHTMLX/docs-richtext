---
sidebar_label: set-text-format
title: set-text-format Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-text-format-Event. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-text-format

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Textformat gesetzt wird

### Verwendung {#usage}

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Parameter {#parameters}

Der Callback des **set-text-format**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `bold` - ein Fettdruck-Textformat
- `italic` - ein kursives Textformat
- `strike` - ein durchgestrichenes Textformat
- `underline` - ein unterstrichenes Textformat

### Beispiel {#example}

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
// das "italic"- und Fettdruck-Textformat anwenden
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
