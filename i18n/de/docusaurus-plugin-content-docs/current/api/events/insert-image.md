---
sidebar_label: insert-image
title: insert-image Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-image-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# insert-image

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Bild eingefügt wird (über die Toolbar, die Menüleiste, die Zwischenablage oder Drag-and-Drop)

### Verwendung {#usage}

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;  // Bildquelle: Server-URL, wenn imageUploadUrl gesetzt ist, oder eine Base64-Daten-URL, wenn das Bild eingebettet ist
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

:::note[Hinweis]
Das Feld `value` enthält entweder eine externe URL (wenn [`imageUploadUrl`](api/config/image-upload-url.md) konfiguriert ist und der Upload erfolgreich war) oder eine Base64-Daten-URL (wenn `imageUploadUrl` weggelassen wird und das Bild clientseitig eingebettet wird). Handler, die die Quelle verarbeiten – zum Beispiel um die URL umzuschreiben oder den Host zu validieren – müssen beide Formate berücksichtigen.
:::

:::info[Info]
Zur Handhabung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel {#example}

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
