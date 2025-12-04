---
sidebar_label: set-font-size
title: set-font-size Event
description: Erfahren Sie mehr über das set-font-size Event in der DHTMLX JavaScript RichText Bibliothek. Entdecken Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-font-size

### Beschreibung

@short: Wird ausgelöst, wenn die Schriftgröße festgelegt wird

### Verwendung

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Parameter

Der Callback für das **set-font-size** Event erhält ein Objekt mit folgendem Parameter:

- `fontSize` - die anzuwendende Schriftgröße

:::info
Um interne Events zu verwalten, können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) konsultieren.
:::

### Beispiel

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "set-font-size" Event hören
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("Die Schriftgröße wurde geändert");
});
// eine neue Schriftgröße setzen
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
