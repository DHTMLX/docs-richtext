---
sidebar_label: locale
title: locale Konfiguration
description: Entdecken Sie die locale-Konfiguration in der DHTMLX JavaScript RichText Bibliotheksdokumentation. Sehen Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# locale

### Beschreibung

@short: Optional. Ein Objekt, das Lokalisierungsbezeichnungen für RichText enthält

:::info
Das **locale**-Objekt sollte alle RichText-Bezeichnungen mit ihren jeweiligen Übersetzungen enthalten.
:::

### Verwendung

~~~jsx {}
locale?: object;
~~~

### Standardkonfiguration

Standardmäßig wird RichText mit dem **englischen** Locale ausgeliefert. Sie haben auch die Möglichkeit, ein benutzerdefiniertes Locale festzulegen.

:::tip
Um das Locale dynamisch zu wechseln, verwenden Sie die [**setLocale()**](api/methods/set-locale.md)-Methode von RichText
:::

### Beispiel

~~~jsx {3}
// RichText initialisieren
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // das chinesische Locale ist initial gesetzt
    // locale: richtext.locales.en // das englische Locale ist initial gesetzt
    // locale: richtext.locales.de // das deutsche Locale ist initial gesetzt
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Diese Eigenschaft wurde in Version 2.0 eingeführt

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)

**Verwandte Beispiel:** [RichText. Lokalisierung](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)
