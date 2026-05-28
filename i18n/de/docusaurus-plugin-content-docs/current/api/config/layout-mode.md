---
sidebar_label: layoutMode
title: layoutMode Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die Konfigurationsoption layoutMode. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie ein kostenloser 30-Tage-Evaluierungsdownload von DHTMLX RichText.
---

# layoutMode

### Beschreibung

@short: Optional. Gibt den Layout-Modus für den Haupteditorbereich an

### Verwendung

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Der Modus `"classic"` füllt den gesamten Bearbeitungsbereich aus. Der Modus `"document"` zeigt den Bearbeitungsbereich als Dokumentseite an.

### Standardkonfiguration

~~~jsx
layoutMode: "classic";
~~~

### Beispiel

~~~jsx {3}
// RichText initialisieren
new richtext.Richtext("#root", {
    layoutMode: "document"  // initialisiert RichText standardmäßig im "document"-Modus
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 anstelle der entfernten Eigenschaft `mode` hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
