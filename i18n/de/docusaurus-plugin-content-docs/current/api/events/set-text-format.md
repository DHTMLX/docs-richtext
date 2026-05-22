---
sidebar_label: set-text-format
title: set-text-format Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-text-format-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
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
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Parameter

Der Callback des **set-text-format**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `bold` - ein fettes Textformat
- `italic` - ein kursives Textformat
- `strike` - ein durchgestrichenes Textformat
- `underline` - ein unterstrichenes Textformat

### Beispiel

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-format" event
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// apply the "italic" and bold text format
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
