---
sidebar_label: set-line-height
title: set-line-height Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-line-height-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-line-height

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Zeilenhöhe gesetzt wird

### Verwendung {#usage}

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des `set-line-height`-Events kann ein Objekt mit dem folgenden Parameter entgegennehmen:

- `lineHeight` - eine Zeilenhöhe

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "set-line-height"-Event abonnieren
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// eine neue Zeilenhöhe anwenden
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
