---
sidebar_label: export
title: export Event
description: Dieser Abschnitt behandelt das export Event in der DHTMLX JavaScript RichText-Bibliothek. Er umfasst Entwickleranleitungen, API-Referenzen, Codebeispiele, Live-Demos und eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# export

### Beschreibung

@short: Wird ausgelöst, nachdem die Option „Export" aus der Menüleiste ausgewählt oder über Event Bus-Methoden aufgerufen wurde.

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

Der Callback für das **export** Event erhält ein Objekt mit folgenden Eigenschaften:

- `format` - gibt das Dateiformat an
- `url` - die Basis-URL, die für den Export der Datei verwendet wird
- `download` - gibt an, ob die Datei nach der Serverantwort automatisch heruntergeladen werden soll. Wenn auf „false" gesetzt, wird die Datei nicht automatisch heruntergeladen, aber die Blob-Daten können über die Eigenschaft `result` im Event-Objekt abgerufen werden
- `fileName` - der Name, der der exportierten Datei zugewiesen wird

:::info
Interne Events können mit [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwaltet werden
:::

### Beispiel

~~~jsx {5-15}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "export" Event hören
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("Die Datei wurde exportiert");
});
// Inhalt als PDF-Datei exportieren
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version v2.0 eingeführt
