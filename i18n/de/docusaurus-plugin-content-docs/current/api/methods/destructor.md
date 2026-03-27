---
sidebar_label: destructor()
title: Methode destructor
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die destructor-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# destructor()

### Beschreibung {#description}

@short: Entfernt alle HTML-Elemente von RichText und trennt alle zugehörigen Ereignisse

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
