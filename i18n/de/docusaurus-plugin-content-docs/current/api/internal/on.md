---
sidebar_label: api.on()
title: on-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die on-Methode. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
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

- `event` - (erforderlich) ein Event, das ausgelöst werden soll
- `handler` - (erforderlich) ein Handler, der angehängt werden soll (die Handler-Argumente hängen vom ausgelösten Event ab)

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
// subscribe to the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Change log:** The method was updated in v2.0. The `context` parameter were removed
