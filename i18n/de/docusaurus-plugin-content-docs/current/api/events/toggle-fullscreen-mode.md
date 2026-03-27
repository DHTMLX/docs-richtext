---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Ereignis
description: Sie können mehr über das toggle-fullscreen-mode-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# toggle-fullscreen-mode

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Vollbildmodus umgeschaltet wird

### Verwendung {#usage}

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **toggle-fullscreen-mode**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `mode` - aktiviert den Vollbildmodus

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „toggle-fullscreen-mode"-Ereignis abonnieren
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("The full screen mode was changed");
});
// Vollbildmodus aktivieren
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
