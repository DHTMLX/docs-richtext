---
sidebar_label: set-text-style
title: set-text-style Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das set-text-style-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# set-text-style

### Beschreibung

@short: Wird ausgelöst, wenn ein Textstil festgelegt wird

### Verwendung

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Parameter

Der Callback des **set-text-style**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `tag` - ein Textstil

:::info
Zur Verarbeitung interner Events können Sie [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-style" event
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("The text style was changed");
});
// apply new text style
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
