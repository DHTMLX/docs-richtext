---
sidebar_label: destructor()
title: destructor-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die destructor-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# destructor()

### Beschreibung {#description}

@short: Entfernt alle HTML-Elemente von RichText und trennt alle zugehörigen Events

### Verwendung {#usage}

~~~jsx {}
destructor(): void;
~~~

### Beispiel {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});

// RichText entfernen
editor.destructor();
~~~
