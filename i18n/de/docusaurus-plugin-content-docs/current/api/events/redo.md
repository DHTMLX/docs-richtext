---
sidebar_label: redo
title: redo Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das redo-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# redo

### Description

@short: Wird ausgelöst, wenn die Schaltfläche „Redo" in der Menüleiste/Toolbar gedrückt wird oder über Event Bus-Methoden

### Usage

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info
Zur Behandlung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "redo" event
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**Change log:** Das Event wurde in v2.0 hinzugefügt
