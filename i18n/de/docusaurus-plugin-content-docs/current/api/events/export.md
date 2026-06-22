---
sidebar_label: export
title: export Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das export-Event. Entwicklerhandbücher und API-Referenz durchsuchen, Code-Beispiele und Live-Demos ausprobieren und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunterladen.
---

# export

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem die Option „Export" in der Menüleiste oder über Event-Bus-Methoden aufgerufen wurde

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

Der Callback des `export`-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `format` - ein Dateiformat
- `url` - eine Basis-URL für den Dateiexport
- `download` - ermöglicht es dem Benutzer anzugeben, ob die Datei nach Empfang der Server-Antwort heruntergeladen werden soll. Ist die Eigenschaft auf „false" gesetzt, wird die Datei nicht heruntergeladen; stattdessen kann der Benutzer die Blob-Daten aus dem Event-Objekt abrufen (siehe die Eigenschaft `result` in der Event-Definition)
- `fileName` - ein Dateiname für den Export

:::info[Info]
Zur Behandlung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-15}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das „export"-Event abonnieren
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

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
