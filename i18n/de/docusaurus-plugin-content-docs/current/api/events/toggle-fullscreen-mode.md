---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Ereignis
description: Erfahren Sie mehr über das toggle-fullscreen-mode Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# toggle-fullscreen-mode

### Beschreibung

@short: Wird ausgelöst, wenn der Vollbildmodus ein- oder ausgeschaltet wird

### Verwendung

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Parameter

Der Callback für das **toggle-fullscreen-mode** Ereignis akzeptiert ein Objekt mit der folgenden Eigenschaft:

- `mode` - gibt an, ob der Vollbildmodus aktiviert ist

:::info
Um interne Ereignisse zu verwalten, können Sie die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Anmeldung zum "toggle-fullscreen-mode" Ereignis
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("Der Vollbildmodus wurde geändert");
});
// Vollbildmodus aktivieren
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**Änderungsprotokoll:** Das Ereignis wurde in Version 2.0 eingeführt
