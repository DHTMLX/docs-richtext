---
sidebar_label: fullscreenMode
title: fullscreenMode Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die fullscreenMode-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# fullscreenMode

### Beschreibung {#description}

@short: Optional. Aktiviert den Vollbildmodus von RichText

### Verwendung {#usage}

~~~jsx {}
fullscreenMode?: boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
fullscreenMode: false;
~~~

### Beispiel {#example}

~~~jsx {3}
// RichText initialisieren
new richtext.Richtext("#root", {
    fullscreenMode: true
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Vollständige Toolbar](https://snippet.dhtmlx.com/ziynafp7?tag=richtext)
