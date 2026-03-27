---
sidebar_label: set-text-format
title: set-text-format Ereignis
description: Sie können mehr über das set-text-format-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-text-format

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Textformat festgelegt wird

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
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Parameter {#parameters}

Der Callback des **set-text-format**-Ereignisses kann ein Objekt mit folgenden Parametern entgegennehmen:

- `bold` - ein fettes Textformat
- `italic` - ein kursives Textformat
- `strike` - ein durchgestrichenes Textformat
- `underline` - ein unterstrichenes Textformat

### Beispiel {#example}

~~~jsx {5-14}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „set-text-format"-Ereignis abonnieren
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// Das „italic"- und fette Textformat anwenden
editor.api.exec("set-text-format", {
    italic: true,
    bold: true
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
