---
sidebar_label: einzug verringern
title: outdent Event
description: Erfahren Sie mehr über das outdent Event in der DHTMLX JavaScript RichText Bibliothek. Entdecken Sie Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# outdent

### Beschreibung

@short: Wird ausgelöst, wenn die Blockeinrückung verringert wird

### Verwendung

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Parameter

Der Callback für das **outdent** Event erhält ein Objekt mit:

- `step` - die Menge, um die die Einrückung verringert wurde

:::info
Um mit internen Events zu arbeiten, können Sie sich auf die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) beziehen.
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "outdent" Event hören
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("Die Einrückung wurde verringert");
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
