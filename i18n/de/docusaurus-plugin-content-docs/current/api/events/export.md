---
sidebar_label: export
title: export Event
description: Sie können mehr über das export-Event in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# export

### Beschreibung

@short: Wird ausgelöst, nachdem die Option „Exportieren" in der Menüleiste oder über Event-Bus-Methoden aufgerufen wurde

### Verwendung

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### Parameter

Der Callback des **export**-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `format` - ein Dateiformat
- `url` - eine Basis-URL für den Dateiexport
- `download` - ermöglicht es dem Benutzer anzugeben, ob die Datei nach Erhalt der Serverantwort heruntergeladen werden soll. Wenn die Eigenschaft auf „false" gesetzt ist, wird die Datei nicht heruntergeladen, der Benutzer kann jedoch stattdessen die Blob-Daten aus dem Event-Objekt abrufen (siehe die `result`-Eigenschaft in der Event-Definition)
- `fileName` - ein Dateiname für den Export

:::info
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

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
