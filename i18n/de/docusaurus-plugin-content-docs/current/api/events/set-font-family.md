---
sidebar_label: set-font-family
title: set-font-family Event
description: Sie können mehr über das set-font-family-Event in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Lesen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-font-family

### Beschreibung

@short: Wird ausgelöst, wenn eine Schriftfamilie festgelegt wird

### Verwendung

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Parameter

Der Callback des **set-font-family**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `fontFamily` - eine Schriftfamilie, die angewendet werden soll. Folgende Schriften sind verfügbar: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info
Zur Behandlung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

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
