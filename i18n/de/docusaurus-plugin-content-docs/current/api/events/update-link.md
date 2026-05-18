---
sidebar_label: update-link
title: update-link Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das update-link-Event. Entdecken Sie Entwicklerhandbücher und API-Referenzen, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# update-link

### Beschreibung

@short: Wird ausgelöst, wenn ein Link aktualisiert wird

### Verwendung

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Parameter

Der Callback des **update-link**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - die Link-ID
- `url` - die geänderte URL

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "update-link" event
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
