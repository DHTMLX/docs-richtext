---
sidebar_label: export
title: export Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das export-Event. Lesen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# export

### Description

@short: Wird ausgelöst, nachdem die Option „Export" in der Menüleiste oder über Event-Bus-Methoden aufgerufen wurde

### Usage

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### Parameters

Der Callback des **export**-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `format` - ein Dateiformat
- `url` - eine Basis-URL für den Dateiexport
- `download` - ermöglicht es dem Benutzer anzugeben, ob die Datei nach Erhalt der Serverantwort heruntergeladen werden soll. Wenn die Eigenschaft auf `false` gesetzt ist, wird die Datei nicht heruntergeladen, sondern der Benutzer kann stattdessen Blob-Daten aus dem Event-Objekt abrufen (siehe die `result`-Eigenschaft in der Event-Definition)
- `fileName` - ein Dateiname für den Export

:::info
Zur Verarbeitung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-15}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "export" event
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// export value as pdf file
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**Change log:** The event was added in v2.0
