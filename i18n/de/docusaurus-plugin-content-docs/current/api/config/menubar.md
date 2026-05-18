---
sidebar_label: menubar
title: menubar Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die menubar-Konfiguration. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
---

# menubar

### Description

@short: Optional. Aktiviert die obere Menüleiste von RichText

### Usage

~~~jsx {}
menubar?: boolean; 
~~~

### Example

~~~jsx {3}
// initialize RichText
new richtext.Richtext("#root", {
    menubar: true
    // other configuration properties
});
~~~

**Change log:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Related articles:** [Configuration](guides/configuration.md)

**Related sample:** [RichText. Initialization with menubar](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)
