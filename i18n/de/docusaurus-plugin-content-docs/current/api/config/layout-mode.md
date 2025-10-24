---
sidebar_label: layoutMode
title: layoutMode Konfiguration
description: Entdecken Sie die layoutMode-Konfiguration in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos an und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# layoutMode

### Beschreibung

@short: Optional. Definiert den Layoutstil für den Haupteditorbereich.

### Verwendung

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Der Modus `"classic"` lässt den Bearbeitungsbereich die gesamte Seite einnehmen. Der Modus `"document"` simuliert tatsächliche Dokumentgrößen und verwendet Formate wie A4, A5, A6 und A7.

### Standardkonfiguration

~~~jsx
layoutMode: "classic";
~~~

### Beispiel

~~~jsx {3}
// initialisiert RichText
new richtext.Richtext("#root", {
    layoutMode: "document"  // setzt RichText standardmäßig auf den Modus "document"
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version 2.0 eingeführt und ersetzt die ältere Eigenschaft `mode`.

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Initialisierung](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
