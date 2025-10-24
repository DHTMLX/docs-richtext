---
sidebar_label: print
title: print Event
description: Erkunden Sie das print Event in der DHTMLX JavaScript RichText Bibliothek Dokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen, Codebeispiele und Live-Demos an und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText.
---

# print

### Beschreibung

@short: Wird ausgelöst, wenn das Dokument mit dem Drucken beginnt

### Verwendung

~~~jsx {}
"print": () => boolean | void;
~~~

:::info
Um interne Events zu verwalten, siehe die [**Event Bus Methoden**](api/overview/event_bus_methods_overview.md)
:::

### Beispiel

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
// Konfigurationseigenschaften
});
// auf das "print" Event hören
editor.api.on("print", () => {
    console.log("Das Dokument wird gedruckt");
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version v2.0 eingeführt
