---
sidebar_label: value
title: value Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die value-Konfiguration. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# value

### Beschreibung

@short: Optional. Legt den Anfangswert (Inhalt) fest, der im Editorbereich von RichText angezeigt wird

:::tip[Tipp]
Wenn Sie den Wert (Inhalt) in einem benutzerdefinierten Format setzen möchten, verwenden Sie die integrierte Methode [`setValue()`](api/methods/set-value.md).
:::

### Verwendung

~~~jsx {}
value?: string; 
~~~

### Beispiel

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // sets the default value (HTML format)
    // other configuration properties
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Initialisierung](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
