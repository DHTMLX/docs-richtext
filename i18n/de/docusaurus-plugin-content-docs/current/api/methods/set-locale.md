---
sidebar_label: setLocale()
title: setLocale-Methode
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die setLocale-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# setLocale()

### Beschreibung {#description}

@short: Wendet ein neues Gebietsschema auf RichText an

### Verwendung {#usage}

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameter {#parameters}

- `null` - (optional) setzt das Standard-Gebietsschema zurück (*Englisch*)
- `locale` - (optional) das Objekt mit den Daten des neuen Gebietsschemas, das angewendet werden soll

:::info[Info]
Verwenden Sie die Methode `setLocale()`, um ein neues Gebietsschema auf RichText anzuwenden. Um RichText auf das Standard-Gebietsschema zurückzusetzen, rufen Sie die Methode `setLocale()` ohne Argumente auf (oder mit dem Wert *null*).
:::

### Beispiel {#example}

~~~jsx {5-6}
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});

// das Gebietsschema "de" auf RichText anwenden
editor.setLocale(de);
~~~

**Änderungsprotokoll:** Die Methode wurde in v2.0 hinzugefügt

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)
