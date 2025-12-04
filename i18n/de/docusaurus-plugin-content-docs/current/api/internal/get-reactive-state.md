---
sidebar_label: api.getReactiveState()
title: getReactiveState Methode
description: Sie können mehr über die getReactiveState Methode in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# api.getReactiveState()

### Beschreibung

@short: Liefert ein Objekt mit den reaktiven Eigenschaften von RichText.

### Verwendung

~~~jsx {}
api.getReactiveState(): object;
~~~

### Rückgabewert

Diese Methode gibt ein Objekt mit den folgenden Eigenschaften zurück:

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
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// den Reactive State von RichText abrufen
const reactive_state = editor.api.getReactiveState();
console.log(reactive_state)
~~~

**Änderungsprotokoll:** Diese Methode wurde in Version 2.0 eingeführt
