---
sidebar_label: print
title: print Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das print-Event. Entwicklerhandbücher und API-Referenz durchsuchen, Codebeispiele und Live-Demos ausprobieren und eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunterladen.
---

# print

### Beschreibung

@short: Wird beim Drucken des Dokuments ausgelöst

### Verwendung

~~~jsx {}
"print": () => boolean | void;
~~~

:::info
Zur Verarbeitung interner Events können Sie die [**Event Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
// Konfigurationseigenschaften
});
// Das "print"-Event abonnieren
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
