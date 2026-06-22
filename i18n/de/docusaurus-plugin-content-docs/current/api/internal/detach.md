---
sidebar_label: api.detach()
title: on-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die on-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.detach()

### Beschreibung {#description}

@short: Ermöglicht das Entfernen/Trennen von Event-Handlern

### Verwendung {#usage}

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parameter {#parameters}

- `tag` - (erforderlich) der Name des Action-Tags

### Events {#events}

:::info[Info]
Die vollständige Liste der internen RichText-Events finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel {#example}

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
