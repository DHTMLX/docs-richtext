---
sidebar_label: delete-link
title: delete-link Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das delete-link Event. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# delete-link

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Link gelöscht wird

### Verwendung {#usage}

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info[Info]
Zur Behandlung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "delete-link"-Event abonnieren
editor.api.on("delete-link", () => {
    console.log("The link was deleted");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
