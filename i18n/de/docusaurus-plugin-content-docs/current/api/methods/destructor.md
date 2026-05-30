---
sidebar_label: destructor()
title: destructor Methode
description: Informationen zur destructor-Methode finden Sie in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
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
    // Konfigurationseigenschaften
});

// RichText entfernen
editor.destructor();
~~~
