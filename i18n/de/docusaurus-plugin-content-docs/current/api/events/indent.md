---
sidebar_label: indent
title: indent Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das indent-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# indent

### Beschreibung

@short: Wird ausgelöst, wenn der Block-Einzug vergrößert wird

### Verwendung

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Parameter

Der Callback des **indent**-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `step` - der Schritt, um den der Einzug vergrößert wurde

:::info
Zur Verarbeitung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "indent"-Event abonnieren
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
