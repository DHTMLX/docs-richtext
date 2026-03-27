---
sidebar_label: insert-list
title: insert-list Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-list-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-list

### Beschreibung {#description}

@short: Wird ausgelöst, wenn eine Liste eingefügt wird

### Verwendung {#usage}

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parameter {#parameters}

Der Callback des **insert-list**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `type` - der Typ der eingefügten Liste. Sie können folgende Werte angeben:
    - `"bulleted"` - Aufzählungsliste
    - `"numbered"` - nummerierte Liste

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "insert-list"-Ereignis abonnieren
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
