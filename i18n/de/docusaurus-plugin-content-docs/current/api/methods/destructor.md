---
sidebar_label: destructor()
title: destructor Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die destructor-Methode. Entwicklerhandbücher und API-Referenz durchsuchen, Code-Beispiele und Live-Demos ausprobieren und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunterladen.
---

# destructor()

### Beschreibung

@short: Entfernt alle HTML-Elemente von RichText und trennt alle zugehörigen Events

### Verwendung

~~~jsx {}
destructor(): void;
~~~

### Beispiel

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// remove RichText
editor.destructor();
~~~
