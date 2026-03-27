---
sidebar_label: set-font-size
title: set-font-size Ereignis
description: Sie können mehr über das set-font-size-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-font-size

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Schriftgröße festgelegt wird

### Verwendung {#usage}

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **set-font-size**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `fontSize` - die anzuwendende Schriftgröße

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „set-font-size"-Ereignis abonnieren
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// Neue Schriftgröße anwenden
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
