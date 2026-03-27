---
sidebar_label: update-link
title: update-link Ereignis
description: Sie können mehr über das update-link-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# update-link

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Link aktualisiert wird

### Verwendung {#usage}

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **update-link**-Ereignisses kann ein Objekt mit folgenden Parametern entgegennehmen:

- `id` - die Link-ID
- `url` - die geänderte URL

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „update-link"-Ereignis abonnieren
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
