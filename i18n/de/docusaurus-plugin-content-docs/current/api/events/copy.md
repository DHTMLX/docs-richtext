---
sidebar_label: copy
title: copy Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das copy-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# copy

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ausgewählter Text kopiert wird

### Verwendung {#usage}

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info[Info]
Zur Verarbeitung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "copy"-Event abonnieren
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
