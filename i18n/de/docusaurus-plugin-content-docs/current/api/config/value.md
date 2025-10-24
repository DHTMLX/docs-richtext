---
sidebar_label: value
title: value Konfiguration
description: Entdecken Sie die value Konfiguration in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# value

### Beschreibung

@short: Optional. Definiert den anfänglichen Inhalt, der im RichText-Editor-Bereich angezeigt wird.

:::tip
Um den Inhalt mit einem benutzerdefinierten Format festzulegen, verwenden Sie die eingebaute [`setValue()`](api/methods/set-value.md) Methode.
:::

### Verwendung

~~~jsx {}
value?: string; 
~~~

### Beispiel

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // legt den Standardwert fest (HTML-Format)
    // andere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version 2.0 eingeführt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandte Beispiele:** [RichText. Initialisierung](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
