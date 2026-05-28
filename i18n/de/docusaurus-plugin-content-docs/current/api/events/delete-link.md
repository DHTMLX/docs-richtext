---
sidebar_label: delete-link
title: delete-link Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das delete-link-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# delete-link

### Beschreibung

@short: Wird ausgelöst, wenn ein Link gelöscht wird

### Verwendung

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info
Zur Verarbeitung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

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
