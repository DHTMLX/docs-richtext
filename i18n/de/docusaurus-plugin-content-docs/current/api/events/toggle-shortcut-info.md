---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das toggle-shortcut-info-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# toggle-shortcut-info

### Description

@short: Wird ausgelöst, wenn die Shortcut-Info ein- oder ausgeblendet wird

### Usage

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Parameters

Der Callback des **toggle-shortcut-info**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `mode` - aktiviert die Shortcut-Info; `true`, um das Shortcut-Info-Popup anzuzeigen, `false`, um es auszublenden

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-shortcut-info" event
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// enable the shortcut info
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Change log:** The event was added in v2.0
