---
sidebar_label: set-line-height
title: set-line-height Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-line-height-Event. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-line-height

### Beschreibung

@short: Wird ausgelöst, wenn ein Zeilenabstand gesetzt wird

### Verwendung

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Parameter

Der Callback des **set-line-height**-Events kann ein Objekt mit dem folgenden Parameter entgegennehmen:

- `lineHeight` - ein Zeilenabstand

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-line-height" event
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// apply a new line height
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
