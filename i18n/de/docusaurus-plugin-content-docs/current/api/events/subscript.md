---
sidebar_label: tiefgestellt
title: subscript Event
description: Entdecken Sie das subscript Event in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# subscript

### Beschreibung

@short: Wird ausgelöst, wenn die Schaltfläche "Tiefgestellt" in der Menüleiste/Toolbar angeklickt oder über Event Bus-Methoden aufgerufen wird

### Verwendung

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
Um mit internen Events zu arbeiten, können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-10}
// initialisiere RichText
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// horche auf das "subscript" Event
editor.api.on("subscript", () => {
    console.log("Tiefgestellt wurde angewendet");
});
// führe das "subscript" Event aus
editor.api.exec("subscript", {});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
