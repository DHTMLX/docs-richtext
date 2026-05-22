---
sidebar_label: api.intercept()
title: intercept-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die intercept-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.intercept()

### Beschreibung

@short: Ermöglicht das Abfangen und Verhindern interner Events

### Verwendung

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Parameter

- `event` - (erforderlich) ein auszulösendes Event
- `callback` - (erforderlich) ein auszuführender Callback (die Callback-Argumente hängen vom ausgelösten Event ab)

### Events

:::info
Die vollständige Liste der internen RichText-Events finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel

~~~jsx {5-10}
// create RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// forbid changing the font size
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
