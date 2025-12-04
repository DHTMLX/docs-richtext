---
sidebar_label: delete-link
title: delete-link Event
description: Sie können im Handbuch der DHTMLX JavaScript RichText-Bibliothek mehr über das delete-link Event erfahren. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# delete-link

### Beschreibung

@short: Wird ausgelöst, sobald ein Link gelöscht wird

### Verwendung

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info
Um interne Events zu verwalten, können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) konsultieren.
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Anmeldung für das "delete-link" Event
editor.api.on("delete-link", () => {
    console.log("Der Link wurde gelöscht");
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
