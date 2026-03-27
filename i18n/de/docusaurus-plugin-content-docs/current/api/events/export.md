---
sidebar_label: export
title: export Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das export-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# export

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem die Option "Exportieren" in der menubar ausgewählt oder über Event-Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### Parameter {#parameters}

Der Callback des **export**-Ereignisses kann ein Objekt mit folgenden Parametern entgegennehmen:

- `format` - ein Dateiformat
- `url` - eine Basis-URL für den Dateiexport
- `download` - ermöglicht es dem Benutzer anzugeben, ob die Datei nach Erhalt der Server-Antwort heruntergeladen werden soll. Wenn die Eigenschaft auf `false` gesetzt ist, wird die Datei nicht heruntergeladen, stattdessen kann der Benutzer Blob-Daten aus dem Ereignisobjekt abrufen (siehe die Eigenschaft `result` in der Ereignisdefinition)
- `fileName` - ein Dateiname für den Export

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-15}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "export"-Ereignis abonnieren
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// Wert als PDF-Datei exportieren
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
