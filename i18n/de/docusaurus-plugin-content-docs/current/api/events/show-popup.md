---
sidebar_label: show-popup
title: show-popup Ereignis
description: Erfahren Sie mehr über das show-popup Ereignis in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Entdecken Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Codebeispiele aus, sehen Sie sich Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
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

Der Callback für das **show-popup** Ereignis erhält ein Objekt mit folgenden Eigenschaften:

- `type` - gibt den Typ des Popups an
- `image` - zeigt an, ob sich der aktuelle Cursor über einem Bild befindet oder nicht

:::info
Zur Verwaltung von internen Ereignissen können die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwendet werden
:::

### Beispiel

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Anmeldung für das "show-popup" Ereignis
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("Das Popup wurde angezeigt/ausgeblendet");
});
// Popup links vom Text anzeigen
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version v2.0 eingeführt
