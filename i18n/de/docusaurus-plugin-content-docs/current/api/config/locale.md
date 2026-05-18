---
sidebar_label: locale
title: locale Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die locale-Konfiguration. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText.
---

# locale

### Description

@short: Optional. Ein Objekt, das die Lokalisierungsbeschriftungen von RichText enthält

:::info
Das **locale**-Objekt muss alle Beschriftungen von RichText mit den entsprechenden Übersetzungen enthalten.
:::

### Usage

~~~jsx {}
locale?: object;
~~~

### Default config

Standardmäßig verwendet RichText das **englische** Gebietsschema. Sie können es auch auf ein benutzerdefiniertes Gebietsschema setzen.

:::tip
Um das aktuelle Gebietsschema dynamisch zu ändern, können Sie die Methode [**setLocale()**](api/methods/set-locale.md) von RichText verwenden.
:::

### Example

~~~jsx {3}
// initialize RichText
const editor = new richtext.RichText("#root", {
    locale: richtext.locales.cn // the Chineese locale will be set initially
    // locale: richtext.locales.en // the English locale will be set initially
    // locale: richtext.locales.de // the Germany locale will be set initially
    // other configuration properties
});
~~~

**Change log:** The property was added in v2.0

**Related articles:** [Localization](guides/localization.md)

**Related sample:** [RichText. Localization](https://snippet.dhtmlx.com/zxjrin3i?tag=richtext)
