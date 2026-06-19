---
sidebar_label: set-font-family
title: set-font-family Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-font-family-Event. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-font-family

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Schriftfamilie gesetzt wird

### Verwendung {#usage}

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **set-font-family**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `fontFamily` - eine anzuwendende Schriftfamilie. Folgende Schriftarten stehen zur Verfügung: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "set-font-family"-Event abonnieren
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// neue Schriftfamilie anwenden
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
