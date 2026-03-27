---
sidebar_label: setLocale()
title: Methode setLocale
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die setLocale-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# setLocale()

### Beschreibung {#description}

@short: Wendet eine neue Locale auf RichText an

### Verwendung {#usage}

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameter {#parameters}

- `null` - (optional) setzt auf die Standard-Locale zurück (*Englisch*)
- `locale` - (optional) das Datenobjekt der anzuwendenden neuen Locale

:::info[Info]
Verwenden Sie die Methode `setLocale()`, um eine neue Locale auf RichText anzuwenden. Um RichText auf die Standard-Locale zurückzusetzen, rufen Sie die Methode `setLocale()` ohne Argumente (oder mit dem Wert *null*) auf.
:::

### Beispiel {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});

// Die Locale "de" auf RichText anwenden
editor.setLocale(de);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)
