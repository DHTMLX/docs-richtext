---
sidebar_label: align
title: align Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das align-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText stehen zur Verfügung.
---

# align

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Textausrichtung über die Menüleiste/Toolbar oder Event-Bus-Methoden geändert wird

### Verwendung {#usage}

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des `align`-Events kann ein Objekt mit dem folgenden Parameter entgegennehmen:

- `align` - eine Textausrichtung. Sie können einen der folgenden Werte angeben: `"left" | "center" | "right" | "justify"`

:::info[Info]
Zur Behandlung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-12}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "align"-Event abonnieren
editor.api.on("align", (obj) => {
    console.log(`Ausrichten auf: ${obj.align}`);
});
// den Text linksbündig ausrichten
editor.api.exec("align", {
    align: "left"
}); 
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
