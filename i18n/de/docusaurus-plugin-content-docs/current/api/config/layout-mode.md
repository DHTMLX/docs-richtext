---
sidebar_label: layoutMode
title: layoutMode Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die layoutMode-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# layoutMode

### Beschreibung {#description}

@short: Optional. Gibt den Layout-Modus für den Haupteditorbereich an

### Verwendung {#usage}

~~~jsx {}
layoutMode: "classic" | "document";
~~~

Der Modus `"classic"` stellt den Bearbeitungsbereich dar, der die gesamte Seite ausfüllt. Der Modus `"document"` entspricht den tatsächlichen Dokumentgrößen (verwendete Größen: A4, A5, A6, A7).

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
