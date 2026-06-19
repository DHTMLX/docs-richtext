---
sidebar_label: menubar
title: menubar Konfiguration
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die menubar-Konfiguration. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# menubar

### Beschreibung {#description}

@short: Optional. Aktiviert die obere Menüleiste von RichText

### Verwendung {#usage}

~~~jsx {}
menubar?: boolean; 
~~~

### Beispiel {#example}

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
