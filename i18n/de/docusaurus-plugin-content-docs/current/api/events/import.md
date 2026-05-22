---
sidebar_label: import
title: import Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das import-Event. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# import

### Description

@short: Wird ausgelöst, nachdem die Option „Import" in der Menüleiste oder über Event-Bus-Methoden aufgerufen wurde

### Usage

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Parameters

Der Callback des **import**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `html` - ein Textwert im HTML-Format

:::info
Zur Verarbeitung interner Events können Sie [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "import" event
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// import new value
editor.api.exec("import", {
    html: "<h2>some value</h2>" // simply calls setValue
});
~~~

**Change log:** The event was added in v2.0
