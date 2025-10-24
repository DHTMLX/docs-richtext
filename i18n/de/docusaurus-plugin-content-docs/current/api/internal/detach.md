---
sidebar_label: api.detach()
title: on Methode
description: Sie können mehr über die on Methode in der Dokumentation der DHTMLX JavaScript RichText Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# api.detach()

### Beschreibung

@short: Ermöglicht das Entfernen oder Abkoppeln von Event-Handlern

### Verwendung

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parameter

- `tag` - (erforderlich) gibt den Namen des Aktionstags an

### Events

:::info
Eine vollständige Liste der internen RichText-Events ist [**hier**](api/overview/events_overview.md) verfügbar
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
