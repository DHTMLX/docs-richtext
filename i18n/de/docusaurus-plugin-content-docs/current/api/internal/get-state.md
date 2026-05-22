---
sidebar_label: api.getState()
title: getState-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die getState-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.getState()

### Beschreibung

@short: Gibt ein Objekt mit den StateStore-Eigenschaften von RichText zurück

### Verwendung

~~~jsx {}
api.getState(): object;
~~~

### Rückgabewert

Die Methode gibt ein Objekt mit den folgenden Parametern zurück:

~~~jsx {}
{     
    cursorState: {},
    defaultStyles: {},
    document: {},
    fullscreen: boolean,
    history: []
    layoutMode: string,
    popup: any,
    selection: {}
}
~~~

### Beispiel

~~~jsx {5-7}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// get the State of RichText
const state = editor.api.getState();
console.log(state);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
