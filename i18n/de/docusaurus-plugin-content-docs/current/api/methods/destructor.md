---
sidebar_label: destructor()
title: destructor Methode
description: Sie können mehr über die destructor Methode in der Dokumentation der DHTMLX JavaScript RichText Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# destructor()

### Beschreibung

@short: Löscht alle HTML-Elemente der RichText-Komponente und trennt alle zugehörigen Ereignisse.

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
