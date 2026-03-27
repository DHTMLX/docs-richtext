---
sidebar_label: show-popup
title: show-popup Ereignis
description: Sie können mehr über das show-popup-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# show-popup

### Beschreibung {#description}

@short: Wird ausgelöst, wenn ein Popup ein- oder ausgeblendet wird

### Verwendung {#usage}

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Parameter {#parameters}

Der Callback des **show-popup**-Ereignisses kann ein Objekt mit folgenden Parametern entgegennehmen:

- `type` - der Typ des Popups
- `image` - ermöglicht Zugriff auf zusätzlichen Kontext (ob der aktuelle Cursor auf ein Bild zeigt oder nicht)

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „show-popup"-Ereignis abonnieren
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// Popup für Links anzeigen
editor.api.exec("show-popup", {
    type: "link"
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
