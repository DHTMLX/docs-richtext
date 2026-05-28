---
sidebar_label: insert-image
title: insert-image Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-image-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-image

### Beschreibung

@short: Wird ausgelöst beim Einfügen eines Bildes

### Verwendung

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // zusätzliche Props aus dem Uploader-Kontext, für die eigentliche Aktion nicht erforderlich
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "insert-image"-Event abonnieren
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
