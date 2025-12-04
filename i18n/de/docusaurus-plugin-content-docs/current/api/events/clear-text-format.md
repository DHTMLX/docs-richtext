---
sidebar_label: clear-text-format
title: clear-text-format Ereignis
description: Sie können mehr über das clear-text-format Ereignis in der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# clear-text-format

### Beschreibung

@short: Wird ausgelöst, sobald ein Textformat über die Menüleiste, Symbolleiste oder Event Bus-Methoden entfernt wird.

### Verwendung

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
Zur Verwaltung interner Ereignisse können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden.
:::

### Beispiel

~~~jsx {5-10}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// auf das "clear-text-format" Ereignis abonnieren
editor.api.on("clear-text-format", () => {
    console.log("Textformat wurde entfernt");
});
// Textformat entfernen
editor.api.exec("clear-text-format", {});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in Version v2.0 eingeführt
