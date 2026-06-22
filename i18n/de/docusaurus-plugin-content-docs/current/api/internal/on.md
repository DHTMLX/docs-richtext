---
sidebar_label: api.on()
title: on-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die on-Methode. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.on()

### Beschreibung {#description}

@short: Ermöglicht das Anbinden eines Handlers an interne Events

### Verwendung {#usage}

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameter {#parameters}

- `event` - (erforderlich) ein auszulösendes Event
- `handler` - (erforderlich) ein anzubindender Handler (die Handler-Argumente hängen vom auszulösenden Event ab)

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
// das "set-font-size"-Event abonnieren
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Der Parameter `context` wurde entfernt
