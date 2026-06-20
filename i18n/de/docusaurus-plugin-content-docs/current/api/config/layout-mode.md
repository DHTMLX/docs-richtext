---
sidebar_label: layoutMode
title: layoutMode Konfiguration
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die layoutMode-Konfiguration. Lesen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# layoutMode

### Beschreibung {#description}

@short: Optional. Legt den Layout-Modus für den Haupteditorbereich fest

### Verwendung {#usage}

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Der Modus `"classic"` füllt den gesamten Bearbeitungsbereich aus. Der Modus `"document"` zeigt den Bearbeitungsbereich als Dokumentseite an.

### Standardkonfiguration {#default-config}

~~~jsx
layoutMode: "classic";
~~~

### Beispiel {#example}

~~~jsx {3}
// RichText initialisieren
new richtext.Richtext("#root", {
    layoutMode: "document"  // initialisiert RichText standardmäßig im "document"-Modus
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 anstelle der entfernten Eigenschaft `mode` hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Initialisierung](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
