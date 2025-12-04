---
sidebar_label: set-font-family
title: set-font-family Event
description: Sie können mehr über das set-font-family Event in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-font-family

### Beschreibung

@short: Wird ausgelöst, wenn die Schriftfamilie gesetzt wird

### Verwendung

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Parameter

Der Callback für das **set-font-family** Event erhält ein Objekt mit folgendem Parameter:

- `fontFamily` - die anzuwendende Schriftfamilie. Die verfügbaren Optionen sind: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info
Um interne Events zu behandeln, können Sie die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "set-font-family" Event hören
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("Die Schriftfamilie wurde geändert");
});
// eine neue Schriftfamilie setzen
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
