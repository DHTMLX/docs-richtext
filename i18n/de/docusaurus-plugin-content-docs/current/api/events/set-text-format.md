---
sidebar_label: set-text-format
title: set-text-format Event
description: Sie können im Handbuch der DHTMLX JavaScript RichText-Bibliothek mehr über das set-text-format Event erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-text-format

### Beschreibung

@short: Wird ausgelöst, wenn ein Textformat angewendet wird

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
Zur Verwaltung interner Events können Sie die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) konsultieren.
:::

### Parameter

Der Callback für das **set-text-format** Event erhält ein Objekt mit folgenden optionalen Eigenschaften:

- `bold` - kennzeichnet fett formatierten Text
- `italic` - kennzeichnet kursiv formatierten Text
- `strike` - kennzeichnet durchgestrichenen Text
- `underline` - kennzeichnet unterstrichenen Text

### Beispiel

~~~jsx {5-14}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "set-text-format" Event hören
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("Das Textformat wurde geändert");
});
// kursiv und fett Formatierung auf den Text anwenden
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
