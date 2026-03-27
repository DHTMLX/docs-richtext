---
sidebar_label: indent
title: indent Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das indent-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# indent

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Blockeinzug vergrößert wird

### Verwendung {#usage}

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **indent**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `step` - der Schritt, um den der Einzug vergrößert wurde

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "indent"-Ereignis abonnieren
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
