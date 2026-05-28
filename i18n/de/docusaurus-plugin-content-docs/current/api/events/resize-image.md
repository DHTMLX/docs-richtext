---
sidebar_label: resize-image
title: resize-image Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das resize-image-Event. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
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
- `width` - die Bildbreite
- `height` - die Bildhöhe

:::info
Zur Behandlung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

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
