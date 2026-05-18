---
sidebar_label: fullscreenMode
title: fullscreenMode Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die fullscreenMode-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# fullscreenMode

### Beschreibung

@short: Optional. Aktiviert den Vollbildmodus von RichText

### Verwendung

~~~jsx {}
fullscreenMode?: boolean; 
~~~

### Standardkonfiguration

~~~jsx
fullscreenMode: false;
~~~

### Beispiel

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    fullscreenMode: true
    // other configuration properties
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Configuration](guides/configuration.md)

**Verwandte Beispiele:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)
