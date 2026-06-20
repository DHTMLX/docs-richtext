---
sidebar_label: insert-list
title: insert-list Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-list-Event. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-list

### Beschreibung {#description}

@short: Wird beim Einfügen einer Liste ausgelöst

### Verwendung {#usage}

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Parameter {#parameters}

Der Callback des `insert-list`-Events kann ein Objekt mit dem folgenden Parameter entgegennehmen:

- `type` - der Typ der eingefügten Liste. Sie können folgende Werte angeben:
    - `"bulleted"` - Aufzählungsliste
    - `"numbered"` - nummerierte Liste

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel {#example}

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
