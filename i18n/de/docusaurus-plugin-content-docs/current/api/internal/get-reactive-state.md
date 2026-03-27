---
sidebar_label: api.getReactiveState()
title: Methode getReactiveState
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die getReactiveState-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# api.getReactiveState()

### Beschreibung {#description}

@short: Gibt ein Objekt mit den reaktiven Eigenschaften von RichText zurück

### Verwendung {#usage}

~~~jsx {}
api.getReactiveState(): object;
~~~

### Rückgabewert {#returns}

Die Methode gibt ein Objekt mit folgenden Parametern zurück:

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

### Beispiel {#example}

~~~jsx {5-7}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Reaktiven Zustand von RichText abrufen
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt
