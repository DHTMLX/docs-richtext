---
sidebar_label: align
title: align Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das align-Event. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# align

### Beschreibung

@short: Wird ausgelöst, wenn die Textausrichtung über die Menüleiste/Symbolleiste oder Event-Bus-Methoden geändert wird

### Verwendung

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Parameter

Der Callback des **align**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `align` - eine Textausrichtung. Folgende Werte sind möglich: `"left" | "center" | "right" | "justify"`

:::info
Zur Verarbeitung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-12}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "align"-Event abonnieren
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// Text linksbündig ausrichten
editor.api.exec("align", {
    align: "left"
}); 
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
