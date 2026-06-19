---
sidebar_label: outdent
title: outdent Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über das outdent-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# outdent

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Block-Einzug verringert wird

### Verwendung {#usage}

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **outdent**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `step` - der Schritt, um den der Einzug verringert wurde

:::info[Info]
Zur Behandlung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "outdent"-Event abonnieren
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
