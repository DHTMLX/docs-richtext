---
sidebar_label: delete-link
title: delete-link Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das delete-link-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# delete-link

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Link gelöscht wird

### Verwendung {#usage}

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "delete-link"-Ereignis abonnieren
editor.api.on("delete-link", () => {
    console.log("The link was deleted");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
