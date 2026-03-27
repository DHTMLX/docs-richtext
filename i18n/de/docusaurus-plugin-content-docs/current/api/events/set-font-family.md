---
sidebar_label: set-font-family
title: set-font-family Ereignis
description: Sie können mehr über das set-font-family-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-font-family

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Schriftfamilie festgelegt wird

### Verwendung {#usage}

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **set-font-family**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `fontFamily` - die anzuwendende Schriftfamilie. Folgende Schriftarten sind verfügbar: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „set-font-family"-Ereignis abonnieren
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// Neue Schriftfamilie anwenden
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
