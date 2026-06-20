---
sidebar_label: insert-link
title: insert-link Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-link-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText stehen zum Download bereit.
---

# insert-link

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Link eingefügt wird

### Verwendung {#usage}

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des `insert-link`-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `url` - die einzufügende URL

:::info[Info]
Zur Behandlung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "insert-link"-Event abonnieren
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
