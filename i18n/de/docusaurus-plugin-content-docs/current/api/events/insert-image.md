---
sidebar_label: insert-image
title: insert-image Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-image-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-image

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Bild eingefügt wird

### Verwendung {#usage}

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // zusätzliche Eigenschaften aus dem Uploader-Kontext, für die eigentliche Aktion nicht erforderlich
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "insert-image"-Ereignis abonnieren
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
