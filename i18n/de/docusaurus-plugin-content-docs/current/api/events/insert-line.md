---
sidebar_label: insert-line
title: insert-line Ereignis
description: Finden Sie Details zum insert-line Ereignis in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Entdecken Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# insert-line

### Beschreibung

@short: Wird ausgelöst, wenn eine horizontale Linie eingefügt wird

### Verwendung

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info
Um mit internen Ereignissen zu arbeiten, können Sie die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "insert-line" Ereignis hören
editor.api.on("insert-line", () => {
    console.log("Die horizontale Linie wurde eingefügt");
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version 2.0 eingeführt
