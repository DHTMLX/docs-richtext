---
sidebar_label: cut
title: cut Event
description: Erfahren Sie mehr über das cut Event in der DHTMLX JavaScript RichText Bibliothek. Entdecken Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# cut

### Beschreibung

@short: Wird ausgelöst, wenn ausgewählter Text ausgeschnitten wird

### Verwendung

~~~jsx {}
"cut": () => boolean | void;
~~~

:::info
Zur Verwaltung interner Events können die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwendet werden.
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Anmeldung für das "cut" Event
editor.api.on("cut", () => {
    console.log("Ausgewählter Text wurde ausgeschnitten");
});
~~~

**Änderungsprotokoll:** Das Event wurde in Version 2.0 eingeführt
