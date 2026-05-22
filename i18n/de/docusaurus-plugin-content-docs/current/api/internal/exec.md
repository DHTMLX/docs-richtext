---
sidebar_label: api.exec()
title: exec-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die exec-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
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
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// set the text font size
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
