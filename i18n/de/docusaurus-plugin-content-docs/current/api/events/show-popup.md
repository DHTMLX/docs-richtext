---
sidebar_label: show-popup
title: show-popup Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das show-popup-Event. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# show-popup

### Beschreibung

@short: Wird ausgelöst, wenn ein Popup angezeigt oder ausgeblendet wird

### Verwendung

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Parameter

Der Callback des **show-popup**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `type` - der Typ des Popups
- `image` - bietet Zugriff auf zusätzlichen Kontext (ob der aktuelle Cursor auf ein Bild zeigt oder nicht)

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "show-popup"-Event abonnieren
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// show-popup the text to the left
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
