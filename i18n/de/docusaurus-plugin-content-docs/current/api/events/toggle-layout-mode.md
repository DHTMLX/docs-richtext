---
sidebar_label: toggle-layout-modus-umschalten
title: toggle-layout-mode Ereignis
description: Sie können im Handbuch der DHTMLX JavaScript RichText-Bibliothek mehr über das toggle-layout-mode Ereignis erfahren. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# toggle-layout-mode

### Beschreibung

@short: Wird ausgelöst, sobald der Layout-Modus gewechselt wird

### Verwendung

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Parameter

Der Callback für das **toggle-layout-mode** Ereignis erhält ein Objekt mit folgenden Parametern:

- `mode` - gibt den Layout-Modus an. Verfügbare Optionen sind: `"classic" | "document"`

:::info
Um interne Ereignisse zu verarbeiten, können Sie die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-11}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Abonnieren des "toggle-layout-mode"-Ereignisses
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("Der Layout-Modus wurde geändert");
});
// Setzen des Layout-Modus auf "document"
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**Änderungsprotokoll:** Das Ereignis wurde in Version 2.0 eingeführt
