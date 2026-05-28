---
sidebar_label: fullscreenMode
title: fullscreenMode Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die fullscreenMode-Konfiguration. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
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
// RichText initialisieren
new richtext.Richtext("#root", {
    fullscreenMode: true
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Full toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)
