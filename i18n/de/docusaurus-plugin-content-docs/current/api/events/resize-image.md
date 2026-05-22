---
sidebar_label: resize-image
title: resize-image Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das resize-image-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# resize-image

### Beschreibung

@short: Wird ausgelöst, wenn ein Bild in der Größe verändert wird

### Verwendung

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Parameter

Der Callback des **resize-image**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - die Bild-ID
- `width` - die Breite des Bildes
- `height` - die Höhe des Bildes

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration properties
});
// subscribe to the "resize-image" event
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
