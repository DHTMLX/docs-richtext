---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das toggle-fullscreen-mode-Event. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# toggle-fullscreen-mode

### Description

@short: Fires when toggling the full screen mode

### Usage

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Parameters

Der Callback des **toggle-fullscreen-mode**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `mode` - aktiviert den Vollbildmodus

:::info
Zur Verarbeitung der internen Events können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-fullscreen-mode" event
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("The full screen mode was changed");
});
// enable the full screen mode
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**Change log:** The event was added in v2.0
