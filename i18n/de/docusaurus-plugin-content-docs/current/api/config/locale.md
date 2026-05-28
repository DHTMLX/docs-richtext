---
sidebar_label: locale
title: locale Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die locale-Konfiguration. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
---

# locale

### Beschreibung

@short: Optional. Ein Objekt, das Lokalisierungsbezeichnungen von RichText enthält

:::info
Das **locale**-Objekt muss alle Bezeichnungen von RichText mit den entsprechenden Übersetzungen enthalten.
:::

### Verwendung

~~~jsx {}
locale?: object;
~~~

### Standardkonfiguration

Standardmäßig verwendet RichText das **englische** Gebietsschema. Sie können auch ein benutzerdefiniertes Gebietsschema festlegen.

:::tip
Um das aktuelle Gebietsschema dynamisch zu ändern, können Sie die Methode [**setLocale()**](api/methods/set-locale.md) von RichText verwenden
:::

### Beispiel

~~~jsx {3}
// RichText initialisieren
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // das chinesische Gebietsschema wird initial gesetzt
    // locale: richtext.locales.en // das englische Gebietsschema wird initial gesetzt
    // locale: richtext.locales.de // das deutsche Gebietsschema wird initial gesetzt
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)

**Verwandtes Beispiel:** [RichText. Lokalisierung](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)
