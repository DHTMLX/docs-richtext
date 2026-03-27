---
sidebar_label: align
title: align Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das align-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# align

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Textausrichtung über menubar/toolbar oder Event-Bus-Methoden geändert wird

### Verwendung {#usage}

~~~jsx {}
"align": ({
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **align**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `align` - eine Textausrichtung. Sie können einen der folgenden Werte angeben: `"left" | "center" | "right" | "justify"`

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-12}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "align"-Ereignis abonnieren
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// Text linksbündig ausrichten
editor.api.exec("align", {
    align: "left"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
