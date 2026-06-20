---
sidebar_label: value
title: value Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die value-Konfiguration. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# value

### Beschreibung {#description}

@short: Optional. Legt den Anfangswert (Inhalt) fest, der im Editorbereich von RichText angezeigt wird

:::tip[Tipp]
Wenn Sie den Wert (Inhalt) in einem benutzerdefinierten Format setzen möchten, verwenden Sie die integrierte Methode [`setValue()`](api/methods/set-value.md).
:::

### Verwendung {#usage}

~~~jsx {}
value?: string; 
~~~

### Beispiel {#example}

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // setzt den Standardwert (HTML-Format)
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Initialisierung](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
