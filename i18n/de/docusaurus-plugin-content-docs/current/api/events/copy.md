---
sidebar_label: copy
title: copy Event
description: Erfahren Sie mehr über das copy Event in der DHTMLX JavaScript RichText Bibliothek. Greifen Sie auf Entwicklerhandbücher, API-Referenzen zu, probieren Sie Live-Demos und Codebeispiele aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# copy

### Beschreibung

@short: Wird ausgelöst, wenn ausgewählter Text kopiert wird

### Verwendung

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info
Um mit internen Events zu arbeiten, können Sie die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "copy" Event hören
editor.api.on("copy", () => {
    console.log("Ausgewählter Text wurde kopiert");
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
