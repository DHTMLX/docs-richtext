---
sidebar_label: api.getState()
title: Methode getState
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die getState-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.getState()

### Beschreibung {#description}

@short: Gibt ein Objekt mit den StateStore-Eigenschaften von RichText zurück

### Verwendung {#usage}

~~~jsx {}
api.getState(): object;
~~~

### Rückgabewert {#returns}

Die Methode gibt ein Objekt mit folgenden Parametern zurück:

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

### Beispiel {#example}

~~~jsx {5-7}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Zustand von RichText abrufen
const state = editor.api.getState();
console.log(state);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
