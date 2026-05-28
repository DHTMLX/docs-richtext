---
sidebar_label: toggle-layout-mode
title: toggle-layout-mode Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das toggle-layout-mode-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# toggle-layout-mode

### Beschreibung

@short: Wird ausgelöst, wenn der Layout-Modus umgeschaltet wird

### Verwendung

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Parameter

Der Callback des **toggle-layout-mode**-Events kann ein Objekt mit folgenden Parametern entgegennehmen:

- `mode` - der Layout-Modus. Folgende Modi sind verfügbar: `"classic" | "document"`

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-11}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "toggle-layout-mode"-Event abonnieren
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("The layout mode was changed");
});
// den "document"-Layout-Modus setzen
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
