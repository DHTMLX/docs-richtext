---
sidebar_label: insert-list
title: insert-list Ereignis
description: Erfahren Sie mehr über das insert-list Ereignis in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# insert-list

### Beschreibung

@short: Wird ausgelöst, wenn eine Liste eingefügt wird

### Verwendung

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parameter

Der Callback für das **insert-list** Ereignis erhält ein Objekt mit folgendem Parameter:

- `type` - gibt die Art der eingefügten Liste an. Mögliche Werte sind:
    - `"bulleted"` - eine Aufzählungsliste
    - `"numbered"` - eine nummerierte Liste

:::info
Zur Verwaltung interner Ereignisse können Sie sich auf die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) beziehen.
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "insert-list" Ereignis hören
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("Die Liste wurde eingefügt");
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version 2.0 eingeführt
