---
sidebar_label: insert-link
title: insert-link Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-link-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-link

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Link eingefügt wird

### Verwendung {#usage}

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **update-link**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `url` - die einzufügende URL

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "insert-link"-Ereignis abonnieren
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
