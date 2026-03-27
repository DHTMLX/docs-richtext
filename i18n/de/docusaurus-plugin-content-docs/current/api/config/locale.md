---
sidebar_label: locale
title: locale Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die locale-Konfiguration. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# locale

### Beschreibung {#description}

@short: Optional. Ein Objekt, das die Lokalisierungsbezeichnungen von RichText enthält

:::info[Info]
Das **locale**-Objekt muss alle Bezeichnungen von RichText mit den entsprechenden Übersetzungen enthalten.
:::

### Verwendung {#usage}

~~~jsx {}
locale?: object;
~~~

### Standardkonfiguration {#default-config}

Standardmäßig verwendet RichText die **englische** Locale. Sie können auch eine benutzerdefinierte Locale festlegen.

:::tip[Tipp]
Um die aktuelle Locale dynamisch zu ändern, können Sie die Methode [**setLocale()**](api/methods/set-locale.md) von RichText verwenden
:::

### Beispiel {#example}

~~~jsx {3}
// RichText initialisieren
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // die chinesische Locale wird initial gesetzt
    // locale: richtext.locales.en // die englische Locale wird initial gesetzt
    // locale: richtext.locales.de // die deutsche Locale wird initial gesetzt
    // weitere Konfigurationseigenschaften
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)

**Verwandtes Beispiel:** [RichText. Lokalisierung](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)
