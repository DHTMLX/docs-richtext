---
sidebar_label: import
title: import Event
description: Entdecken Sie das import Event in der DHTMLX JavaScript RichText Bibliothek Dokumentation. Erkunden Sie Entwickleranleitungen, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# import

### Beschreibung

@short: Wird ausgelöst, nachdem die Option „Import" aus der Menüleiste ausgewählt wurde oder über Event Bus Methoden.

### Verwendung

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Parameter

Der Callback für das **import** Event akzeptiert ein Objekt mit folgendem Parameter:

- `html` - ein String, der HTML-Inhalt enthält

:::info
Um interne Events zu verwalten, können Sie [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "import" Event hören
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("Der neue Wert wurde importiert");
});
// einen Import ausführen
editor.api.exec("import", {
    html: "<h2>some value</h2>" // ruft intern setValue auf
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
