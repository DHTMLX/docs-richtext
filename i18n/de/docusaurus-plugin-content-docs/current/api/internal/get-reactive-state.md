---
sidebar_label: api.getReactiveState()
title: getReactiveState Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die getReactiveState-Methode. Erkunden Sie Entwicklerhandbücher und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.getReactiveState()

### Beschreibung

@short: Gibt ein Objekt mit den reaktiven Eigenschaften von RichText zurück

### Verwendung

~~~jsx {}
api.getReactiveState(): object;
~~~

### Rückgabewert

Die Methode gibt ein Objekt mit den folgenden Parametern zurück:

~~~jsx {}
{
    cursorState: { subscribe: any },
    defaultStyles {...},
    document {...},
    fullscreen {...},
    history {...},
    layoutMode {...},
    popup {...},
    selection {...}
}
~~~  

### Beispiel

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// get the Reactive State of RichText
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
