---
sidebar_label: api.on()
title: on Methode
description: Sie können die on-Methode in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# api.on()

### Beschreibung

@short: Ermöglicht das Anhängen eines Handlers an interne Events

### Verwendung

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameter

- `event` - (erforderlich) das Event, das den Handler auslöst
- `handler` - (erforderlich) die Funktion, die aufgerufen wird, wenn das Event ausgelöst wird (die Argumente hängen vom Event ab)

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
// auf das Event "set-font-size" hören
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version 2.0 aktualisiert. Der Parameter `context` wurde entfernt
