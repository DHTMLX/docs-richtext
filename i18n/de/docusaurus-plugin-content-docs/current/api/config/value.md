---
sidebar_label: value
title: value Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die value-Konfiguration. Lesen Sie Entwickleranleitungen und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# value

### Beschreibung

@short: Optional. Gibt den Anfangswert (Inhalt) an, der im Editorbereich von RichText angezeigt wird

:::tip[Hinweis]
Wenn Sie den Wert (Inhalt) in einem benutzerdefinierten Format festlegen möchten, verwenden Sie die integrierte Methode [`setValue()`](api/methods/set-value.md).
:::

### Verwendung

~~~jsx {}
value?: string; 
~~~

### Beispiel

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // setzt den Standardwert (HTML-Format)
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [RichText. Initialisierung](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
