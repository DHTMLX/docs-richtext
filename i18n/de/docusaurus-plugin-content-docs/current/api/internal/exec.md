---
sidebar_label: api.exec()
title: exec Methode
description: Sie können mehr über die exec Methode in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# api.exec()

### Beschreibung

@short: Diese Methode ermöglicht das Auslösen interner Ereignisse innerhalb des Editors.

### Verwendung

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Parameter

- `event` - (erforderlich) der Name des auszulösenden Ereignisses
- `config` - (erforderlich) ein Objekt mit Parametern für das ausgelöste Ereignis

### Ereignisse

:::info
Die vollständige Liste der internen RichText-Ereignisse finden Sie [**hier**](api/overview/events_overview.md)
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Schriftgröße auf den Text anwenden
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**Änderungsprotokoll:** Diese Methode wurde in Version v2.0 eingeführt
