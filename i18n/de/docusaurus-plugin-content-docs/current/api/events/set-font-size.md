---
sidebar_label: set-font-size
title: set-font-size Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-font-size-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# set-font-size

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Schriftgröße festgelegt wird

### Verwendung {#usage}

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des `set-font-size`-Events kann ein Objekt mit dem folgenden Parameter entgegennehmen:

- `fontSize` - eine anzuwendende Schriftgröße

:::info[Info]
Zur Behandlung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das "set-font-size"-Event abonnieren
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// Neue Schriftgröße anwenden
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
