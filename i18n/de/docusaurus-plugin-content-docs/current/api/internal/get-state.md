---
sidebar_label: api.getState()
title: getState Methode
description: Sie können die getState Methode in der Dokumentation der DHTMLX JavaScript RichText Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# api.getState()

### Beschreibung

@short: Liefert ein Objekt, das die aktuellen StateStore-Eigenschaften von RichText enthält.

### Verwendung

~~~jsx {}
api.getState(): object;
~~~

### Rückgabewert

Diese Methode gibt ein Objekt mit den folgenden Eigenschaften zurück:

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
// den aktuellen Zustand von RichText abrufen
const state = editor.api.getState();
console.log(state);
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v2.0 hinzugefügt
