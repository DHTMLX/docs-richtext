---
sidebar_label: hochgestellt
title: superscript Event
description: Entdecken Sie das superscript Event in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# superscript

### Beschreibung

@short: Dieses Event wird ausgelöst, wenn die Schaltfläche "Hochgestellt" in der Menüleiste oder Symbolleiste angeklickt wird oder wenn es über Event Bus-Methoden aktiviert wird.

### Verwendung

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
Um interne Events zu verwalten, siehe die [**Event Bus methods**](api/overview/event_bus_methods_overview.md).
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "superscript" Event abonnieren
editor.api.on("superscript", () => {
    console.log("Hochgestellt wurde angewendet");
});
// das "superscript" Event auslösen
editor.api.exec("superscript", {});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
