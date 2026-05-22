---
sidebar_label: api.detach()
title: on-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die on-Methode. Lesen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# api.detach()

### Beschreibung

@short: Ermöglicht das Entfernen/Trennen von Event-Handlern

### Verwendung

~~~jsx {}
api.detach( tag: string ): void;
~~~

### Parameter

- `tag` - (erforderlich) der Name des Action-Tags

### Events

:::info
Die vollständige Liste der internen RichText-Events finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel

~~~jsx {6-8,10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
}, { tag: "track" });

editor.api.detach("track");
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Die Parameter `name` und `context` wurden entfernt
