---
sidebar_label: update-link
title: update-link Ereignis
description: Sie können im Handbuch der DHTMLX JavaScript RichText-Bibliothek mehr über das update-link Ereignis erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# update-link

### Beschreibung

@short: Wird ausgelöst, wenn ein Link aktualisiert wird

### Verwendung

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Parameter

Der Callback für das **update-link** Ereignis erhält ein Objekt mit den folgenden Eigenschaften:

- `id` - die Kennung des Links
- `url` - die aktualisierte URL

:::info
Zur Verwaltung interner Ereignisse können Sie die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) konsultieren
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Anmeldung beim "update-link" Ereignis
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("Der folgende Link wurde aktualisiert:" + obj.url);
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version v2.0 eingeführt
