---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das toggle-fullscreen-mode-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# toggle-fullscreen-mode

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Vollbildmodus umgeschaltet wird

### Verwendung {#usage}

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **toggle-fullscreen-mode**-Events kann ein Objekt mit dem folgenden Parameter entgegennehmen:

- `mode` - aktiviert den Vollbildmodus

:::info[Info]
Zur Verarbeitung der internen Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

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
