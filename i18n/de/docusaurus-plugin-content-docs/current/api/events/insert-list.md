---
sidebar_label: insert-list
title: insert-list Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-list-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
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

Der Callback des **insert-list**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `type` - der Typ der eingefügten Liste. Folgende Werte sind möglich:
    - `"bulleted"` - Aufzählungsliste
    - `"numbered"` - nummerierte Liste

:::info
Zur Verarbeitung interner Events können die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwendet werden.
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "insert-list"-Event abonnieren
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
