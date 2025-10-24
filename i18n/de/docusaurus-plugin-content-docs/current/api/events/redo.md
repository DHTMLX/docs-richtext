---
sidebar_label: redo
title: redo Ereignis
description: Entdecken Sie das redo Ereignis in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# redo

### Beschreibung

@short: Wird ausgelöst, wenn die Schaltfläche „Redo" in der Menüleiste/Toolbar angeklickt oder über Event Bus Methoden aktiviert wird.

### Verwendung

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info
Zur Verwaltung interner Ereignisse können Sie [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Anmeldung für das "redo" Ereignis
editor.api.on("redo", () => {
    console.log("Redo-Operation wurde durchgeführt");
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version 2.0 eingeführt
