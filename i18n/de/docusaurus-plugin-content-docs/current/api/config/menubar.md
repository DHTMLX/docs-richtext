---
sidebar_label: menubar
title: menubar Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die menubar-Konfiguration. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# menubar

### Beschreibung

@short: Optional. Aktiviert die obere Menüleiste von RichText

### Verwendung

~~~jsx {}
menubar?: boolean; 
~~~

### Beispiel

~~~jsx {3}
// RichText initialisieren
new richtext.Richtext("#root", {
    menubar: true
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Initialisierung mit Menüleiste](https://snippet.dhtmlx.com/tjryzka7?tag=richtext)
