---
sidebar_label: indent
title: indent Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das indent-Event. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# indent

### Description

@short: Wird ausgelöst, wenn die Blockeinrückung vergrößert wird

### Usage

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Parameters

Der Callback des **indent**-Events kann ein Objekt mit den folgenden Parametern entgegennehmen:

- `step` - der Schritt, um den die Einrückung vergrößert wurde

:::info
Zur Behandlung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "indent" event
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**Change log:** The event was added in v2.0
