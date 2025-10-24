---
sidebar_label: set-line-height
title: set-line-height Event
description: Sie können im Handbuch der DHTMLX JavaScript RichText-Bibliothek mehr über das set-line-height Ereignis erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-line-height

### Beschreibung

@short: Wird ausgelöst, sobald die Zeilenhöhe gesetzt wird

### Verwendung

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Parameter

Der Callback für das **set-line-height** Ereignis erhält ein Objekt mit folgendem Parameter:

- `lineHeight` - der Wert der gesetzten Zeilenhöhe

:::info
Zur Verwaltung interner Ereignisse können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) konsultieren.
:::

### Beispiel

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "set-line-height" Ereignis hören
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("Die Zeilenhöhe wurde geändert");
});
// eine neue Zeilenhöhe setzen
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in Version 2.0 eingeführt
