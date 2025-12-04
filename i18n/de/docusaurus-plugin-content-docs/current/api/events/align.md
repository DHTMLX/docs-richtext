---
sidebar_label: align
title: align Event
description: Entdecken Sie das align-Event in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# align

### Beschreibung

@short: Wird ausgelöst, sobald die Textausrichtung über die Menüleiste/Toolbar oder Event Bus Methoden aktualisiert wird.

### Verwendung

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Parameter

Der Callback für das **align**-Event erhält ein Objekt mit der folgenden Eigenschaft:

- `align` - gibt die Textausrichtung an, die einen der folgenden Werte haben kann: `"left" | "center" | "right" | "justify"`

:::info
Interne Events können mit Hilfe der [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) behandelt werden.
:::

### Beispiel

~~~jsx {5-12}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "align"-Event hören
editor.api.on("align", (obj) => {
    console.log(`Ausrichtung auf: ${obj.align}`);
});
// Textausrichtung auf links setzen
editor.api.exec("align", {
    align: "left"
}); 
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt.
