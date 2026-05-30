---
sidebar_label: set-font-size
title: set-font-size Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-font-size-Ereignis. Entdecken Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-font-size

### Beschreibung

@short: Wird ausgelöst, wenn eine Schriftgröße festgelegt wird

### Verwendung

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Parameter

Der Callback des **set-font-size**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `fontSize` - eine anzuwendende Schriftgröße

:::info
Zur Verarbeitung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "set-font-size"-Ereignis abonnieren
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// neue Schriftgröße anwenden
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
