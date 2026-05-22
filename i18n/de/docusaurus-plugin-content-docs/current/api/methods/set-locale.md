---
sidebar_label: setLocale()
title: setLocale-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die setLocale-Methode. Erkunden Sie Entwickleranleitungen und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# setLocale()

### Beschreibung

@short: Wendet eine neue Sprache auf RichText an

### Verwendung

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameter

- `null` - (optional) setzt auf die Standardsprache zurück (*Englisch*)
- `locale` - (optional) das Objekt mit den Daten der neuen anzuwendenden Sprache

:::info
Verwenden Sie die Methode `setLocale()`, um eine neue Sprache auf RichText anzuwenden. Um RichText auf die Standardsprache zurückzusetzen, rufen Sie die Methode `setLocale()` ohne Argumente (oder mit dem Wert *null*) auf.
:::

### Beispiel

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // configuration properties
});

// apply the "de" locale to RichText
editor.setLocale(de);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)
