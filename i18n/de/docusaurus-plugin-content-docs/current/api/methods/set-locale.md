---
sidebar_label: setLocale()
title: setLocale Methode
description: Erfahren Sie mehr über die setLocale-Methode in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Lesen Sie Entwicklerhandbücher und API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# setLocale()

### Beschreibung

@short: Wendet eine neue Locale auf RichText an

### Verwendung

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameter

- `null` - (optional) setzt die Standard-Locale zurück (*Englisch*)
- `locale` - (optional) das Objekt mit den Daten der neuen anzuwendenden Locale

:::info
Verwenden Sie die Methode `setLocale()`, um eine neue Locale auf RichText anzuwenden. Um RichText auf die Standard-Locale zurückzusetzen, rufen Sie die Methode `setLocale()` ohne Argumente auf (oder mit dem Wert *null*).
:::

### Beispiel

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});

// die Locale "de" auf RichText anwenden
editor.setLocale(de);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)
