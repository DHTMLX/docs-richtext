---
sidebar_label: setLocale()
title: setLocale Methode
description: Erfahren Sie mehr über die setLocale Methode in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# setLocale()

### Beschreibung

@short: Aktualisiert die Spracheinstellungen für RichText

### Verwendung

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameter

- `null` - (optional) wechselt zurück zur Standardsprache (*Englisch*)
- `locale` - (optional) ein Objekt, das die neuen Sprachdaten enthält, die angewendet werden sollen

:::info
Die Methode `setLocale()` aktualisiert die von RichText verwendete Spracheinstellung. Wird sie ohne Argumente aufgerufen (oder *null* übergeben), wird die Spracheinstellung auf die Standardkonfiguration zurückgesetzt.
:::

### Beispiel

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});

// setzt die Sprache von RichText auf "de"
editor.setLocale(de);
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v2.0 eingeführt

**Verwandte Artikel:** [Localization](guides/localization.md)
