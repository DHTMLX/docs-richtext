---
sidebar_label: api.detach()
title: on Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die on-Methode. Entwicklerhandbücher und API-Referenz, Codebeispiele und Live-Demos, sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
---

# api.detach()

### Beschreibung

@short: Ermöglicht das Entfernen/Abtrennen von Event-Handlern

### Verwendung

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parameter

- `tag` - (erforderlich) der Name des Aktions-Tags

### Events

:::info
Die vollständige Liste der internen RichText-Events finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel

~~~jsx {6-8,10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Die Parameter `name` und `context` wurden entfernt
