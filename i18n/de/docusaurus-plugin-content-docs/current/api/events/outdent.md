---
sidebar_label: outdent
title: outdent Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das outdent-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# outdent

### Beschreibung

@short: Wird ausgelöst, wenn der Blockeinzug verringert wird

### Verwendung

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Parameter

Der Callback des **outdent**-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `step` - der Schritt, um den der Einzug verringert wurde

:::info
Zur Verarbeitung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

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
