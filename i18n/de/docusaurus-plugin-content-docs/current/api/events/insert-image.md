---
sidebar_label: insert-image
title: insert-image Event
description: Entdecken Sie das insert-image Event in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# insert-image

### Beschreibung

@short: Wird ausgelöst, wenn ein Bild eingefügt wird

### Verwendung

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // zusätzliche Eigenschaften aus dem Uploader-Kontext, nicht erforderlich für die eigentliche Aktion
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info
Um interne Events zu verwalten, können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) zu Rate ziehen.
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "insert-image" Event hören
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("Das Bild wurde eingefügt");
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
