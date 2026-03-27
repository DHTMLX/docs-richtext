---
sidebar_label: api.on()
title: Methode on
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die on-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.on()

### Beschreibung {#description}

@short: Ermöglicht das Anhängen eines Handlers an interne Ereignisse

### Verwendung {#usage}

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Parameter {#parameters}

- `event` - (erforderlich) ein auszulösendes Ereignis
- `handler` - (erforderlich) ein anzuhängender Handler (die Handler-Argumente hängen vom auszulösenden Ereignis ab)

### Ereignisse {#events}

:::info[Info]
Die vollständige Liste der internen RichText-Ereignisse finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Das Ereignis "set-font-size" abonnieren
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 aktualisiert. Der Parameter `context` wurde entfernt
