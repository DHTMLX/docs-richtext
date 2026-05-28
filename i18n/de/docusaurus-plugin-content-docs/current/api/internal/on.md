---
sidebar_label: api.on()
title: on Method
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Methode on. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.on()

### Beschreibung

@short: Ermöglicht das Hinzufügen eines Handlers für interne Events

### Verwendung

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameter

- `event` - (erforderlich) ein Event, das ausgelöst werden soll
- `handler` - (erforderlich) ein hinzuzufügender Handler (die Handler-Argumente hängen vom ausgelösten Event ab)

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
// das Event "set-font-size" abonnieren
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Der Parameter `context` wurde entfernt
