---
sidebar_label: api.exec()
title: exec-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die exec-Methode. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# api.exec()

### Beschreibung

@short: Ermöglicht das Auslösen interner Events

### Verwendung

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameter

- `event` - (erforderlich) ein auszulösendes Event
- `config` - (erforderlich) das Konfigurationsobjekt mit Parametern (siehe das auszulösende Event)

### Events

:::info
Die vollständige Liste der internen RichText-Events finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Schriftgröße des Textes festlegen
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
