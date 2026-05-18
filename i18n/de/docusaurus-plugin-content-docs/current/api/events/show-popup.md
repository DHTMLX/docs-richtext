---
sidebar_label: show-popup
title: show-popup Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das show-popup-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
---

# show-popup

### Description

@short: Wird ausgelöst, wenn ein Popup angezeigt oder ausgeblendet wird

### Usage

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Parameters

Der Callback des **show-popup**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `type` - der Typ des Popups
- `image` - ermöglicht Zugriff auf zusätzlichen Kontext (ob der aktuelle Cursor auf ein Bild zeigt oder nicht)

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Example

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "show-popup" event
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// show-popup the text to the left
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**Change log:** Das Event wurde in v2.0 hinzugefügt
