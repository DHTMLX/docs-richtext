---
sidebar_label: resize-image
title: resize-image Ereignis
description: Sie können im Handbuch der DHTMLX JavaScript RichText-Bibliothek mehr über das resize-image Ereignis erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# resize-image

### Beschreibung

@short: Wird ausgelöst, wenn ein Bild in der Größe verändert wird

### Verwendung

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Parameter

Der Callback für das **resize-image** Ereignis erhält ein Objekt mit folgenden Eigenschaften:

- `id` - die eindeutige Kennung des Bildes
- `width` - die neue Breite des Bildes
- `height` - die neue Höhe des Bildes

:::info
Um mit internen Ereignissen zu arbeiten, können Sie [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
// Konfigurationseigenschaften
});
// auf das "resize-image" Ereignis hören
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("Das Bild wurde in der Größe verändert")
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version v2.0 eingeführt
