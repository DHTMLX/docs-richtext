---
sidebar_label: api.exec()
title: exec-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die exec-Methode. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.exec()

### Beschreibung {#description}

@short: Ermöglicht das Auslösen interner Events

### Verwendung {#usage}

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameter {#parameters}

- `event` - (erforderlich) ein auszulösendes Event
- `config` - (erforderlich) das Konfigurationsobjekt mit Parametern (siehe das auszulösende Event)

### Events {#events}

:::info[Info]
Die vollständige Liste der internen RichText-Events finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel {#example}

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
