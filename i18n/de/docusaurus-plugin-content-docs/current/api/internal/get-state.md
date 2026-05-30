---
sidebar_label: api.getState()
title: getState-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die getState-Methode. Sehen Sie sich Entwicklerhandbücher und API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
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
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// den State von RichText abrufen
const state = editor.api.getState();
console.log(state);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
