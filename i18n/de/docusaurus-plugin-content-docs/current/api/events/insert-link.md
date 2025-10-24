---
sidebar_label: insert-link
title: insert-link Event
description: Erfahren Sie mehr über das insert-link Event in der DHTMLX JavaScript RichText Bibliothek. Entdecken Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Beispielcode und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# insert-link

### Beschreibung

@short: Wird ausgelöst, wenn ein Link eingefügt wird

### Verwendung

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Parameter

Der Callback für das **update-link** Event erhält ein Objekt mit folgendem Parameter:

- `url` - die eingefügte URL

:::info
Zur Verwaltung interner Events können Sie die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "insert-link" Event hören
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("Der folgende Link wurde eingefügt: " + obj.url);
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
