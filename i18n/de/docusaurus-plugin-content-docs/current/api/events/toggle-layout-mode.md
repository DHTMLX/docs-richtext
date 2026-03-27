---
sidebar_label: toggle-layout-mode
title: toggle-layout-mode Ereignis
description: Sie können mehr über das toggle-layout-mode-Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# toggle-layout-mode

### Beschreibung {#description}

@short: Wird ausgelöst, wenn der Layout-Modus umgeschaltet wird

### Verwendung {#usage}

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **toggle-layout-mode**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `mode` - der Layout-Modus. Folgende Modi sind verfügbar: `"classic" | "document"`

:::info[Info]
Zur Behandlung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-11}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das „toggle-layout-mode"-Ereignis abonnieren
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("The layout mode was changed");
});
// Den „document"-Layout-Modus festlegen
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
