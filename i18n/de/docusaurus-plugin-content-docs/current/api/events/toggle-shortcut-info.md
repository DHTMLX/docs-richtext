---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Ereignis
description: Sie können mehr über das toggle-shortcut-info-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# toggle-shortcut-info

### Beschreibung {#description}

@short: Wird ausgelöst, wenn die Tastenkürzel-Info umgeschaltet wird

### Verwendung {#usage}

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **toggle-shortcut-info**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `mode` - aktiviert die Tastenkürzel-Info; `true` zum Anzeigen des Tastenkürzel-Info-Popups, `false` zum Ausblenden des Tastenkürzel-Info-Popups

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „toggle-shortcut-info"-Ereignis abonnieren
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// Die Tastenkürzel-Info aktivieren
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
