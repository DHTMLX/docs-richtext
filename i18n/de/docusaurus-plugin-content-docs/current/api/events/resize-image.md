---
sidebar_label: resize-image
title: resize-image Ereignis
description: Sie können mehr über das resize-image-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# resize-image

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Bild in der Größe geändert wird

### Verwendung {#usage}

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **resize-image**-Ereignisses kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - die Bild-ID
- `width` - die Bildbreite
- `height` - die Bildhöhe

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
// Konfigurationseigenschaften
});
// Das „resize-image"-Ereignis abonnieren
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
