---
sidebar_label: paste
title: paste Event
description: Entdecken Sie das paste Event in der DHTMLX JavaScript RichText Bibliothek Dokumentation. Greifen Sie auf Entwicklerhandbücher, API-Referenzen zu, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# paste

### Beschreibung

@short: Wird ausgelöst, wenn Inhalt eingefügt wird

### Verwendung

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info
Um interne Events zu verwalten, siehe die [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Auf das "paste" Event abonnieren
editor.api.on("paste", () => {
    console.log("Inhalt wurde eingefügt");
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version v2.0 eingeführt
