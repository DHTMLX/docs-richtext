---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das toggle-shortcut-info-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# toggle-shortcut-info

### Beschreibung

@short: Wird ausgelöst, wenn die Tastenkürzel-Info ein- oder ausgeblendet wird

### Verwendung

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Parameter

Der Callback des **toggle-shortcut-info**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `mode` - aktiviert die Tastenkürzel-Info; `true`, um das Tastenkürzel-Info-Popup anzuzeigen, `false`, um es auszublenden

:::info
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "toggle-shortcut-info"-Event abonnieren
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// die Tastenkürzel-Info aktivieren
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
