---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das toggle-shortcut-info-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# toggle-shortcut-info

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Shortcut-Info ein- oder ausgeblendet wird

### Verwendung {#usage}

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des `toggle-shortcut-info`-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `mode` - aktiviert eine Shortcut-Info; `true`, um das Shortcut-Info-Popup anzuzeigen, `false`, um es auszublenden

:::info[Info]
Zur Verarbeitung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das "toggle-shortcut-info"-Event abonnieren
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// Die Shortcut-Info aktivieren
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
