---
sidebar_label: outdent
title: outdent Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das outdent-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# outdent

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Blockeinzug verringert wird

### Verwendung {#usage}

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **outdent**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `step` - der Schritt, um den der Einzug verringert wurde

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "outdent"-Ereignis abonnieren
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
