---
sidebar_label: update-link
title: update-link Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das update-link-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# update-link

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Link aktualisiert wird

### Verwendung {#usage}

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **update-link**-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `id` - die Link-ID
- `url` - die geänderte URL

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "update-link"-Event abonnieren
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
