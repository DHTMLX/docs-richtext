---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das toggle-fullscreen-mode-Event. Lesen Sie Entwicklerhandbücher und API-Referenzen, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# toggle-fullscreen-mode

### Beschreibung

@short: Wird ausgelöst, wenn der Vollbildmodus umgeschaltet wird

### Verwendung

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Parameter

Der Callback des **toggle-fullscreen-mode**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `mode` - aktiviert den Vollbildmodus

:::info
Zur Behandlung der internen Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "toggle-fullscreen-mode"-Event abonnieren
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("The full screen mode was changed");
});
// den Vollbildmodus aktivieren
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
