---
sidebar_label: api.detach()
title: Methode on
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die on-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.detach()

### Beschreibung {#description}

@short: Ermöglicht das Entfernen/Abtrennen von Ereignis-Handlern

### Verwendung {#usage}

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parameter {#parameters}

- `tag` - (erforderlich) der Name des Aktions-Tags

### Ereignisse {#events}

:::info[Info]
Die vollständige Liste der internen RichText-Ereignisse finden Sie [**hier**](api/overview/events_overview.md)
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
