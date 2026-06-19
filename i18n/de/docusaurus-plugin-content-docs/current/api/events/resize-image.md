---
sidebar_label: resize-image
title: resize-image Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das resize-image-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# resize-image

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Bild in der Größe geändert wird

### Verwendung {#usage}

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **resize-image**-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - die Bild-ID
- `width` - die Breite des Bildes
- `height` - die Höhe des Bildes

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
// Konfigurationseigenschaften
});
// das "resize-image"-Event abonnieren
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
