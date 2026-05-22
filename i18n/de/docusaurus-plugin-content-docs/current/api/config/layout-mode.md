---
sidebar_label: layoutMode
title: layoutMode Config
description: Sie können mehr über die layoutMode-Konfiguration in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# layoutMode

### Description

@short: Optional. Legt den Layout-Modus für den Haupteditorbereich fest

### Usage

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Der Modus `"classic"` füllt den gesamten Bearbeitungsbereich aus. Der Modus `"document"` zeigt den Bearbeitungsbereich als Dokumentseite an.

### Default config

~~~jsx
layoutMode: "classic";
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // initializes RichText with "document" mode by default
    // other configuration properties
});
~~~

**Change log:** Die Eigenschaft wurde in v2.0 anstelle der entfernten `mode`-Eigenschaft hinzugefügt

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
