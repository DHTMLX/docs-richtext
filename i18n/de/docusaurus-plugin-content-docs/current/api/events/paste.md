---
sidebar_label: paste
title: paste Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das paste-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungszeitraum von DHTMLX RichText.
---

# paste

### Beschreibung

@short: Wird ausgelöst, wenn Inhalt eingefügt wird

### Verwendung

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info
Zur Behandlung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "paste" event
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
