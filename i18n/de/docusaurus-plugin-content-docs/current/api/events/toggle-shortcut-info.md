---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Event
description: Sie können im Handbuch der DHTMLX JavaScript RichText-Bibliothek mehr über das toggle-shortcut-info Event erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# toggle-shortcut-info

### Beschreibung

@short: Wird ausgelöst, wenn die Shortcut-Info ein- oder ausgeblendet wird

### Verwendung

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Parameter

Der Callback für das **toggle-shortcut-info** Event erhält ein Objekt mit folgender Eigenschaft:

- `mode` - steuert die Anzeige der Shortcut-Info; `true`, um das Shortcut-Info-Popup anzuzeigen, `false`, um es zu verbergen

:::info
Zur Verwaltung interner Events können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) konsultieren.
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Anmeldung zum "toggle-shortcut-info" Event
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("Die Shortcut-Info wurde angezeigt");
});
// Shortcut-Info aktivieren
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Änderungsprotokoll:** Das Event wurde in Version 2.0 eingeführt
