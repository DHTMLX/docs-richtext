---
sidebar_label: einzug
title: indent Event
description: Erfahren Sie mehr über das indent Event in der DHTMLX JavaScript RichText Bibliothek. Entdecken Sie Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX RichText herunter.
---

# indent

### Beschreibung

@short: Wird ausgelöst, wenn die Blockeinrückung vergrößert wird

### Verwendung

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Parameter

Der Callback für das **indent** Event erhält ein Objekt mit folgender Eigenschaft:

- `step` - die Menge, um die die Einrückung vergrößert wurde

:::info
Zur Verwaltung interner Events können Sie die [**Event Bus methods**](api/overview/event_bus_methods_overview.md) konsultieren.
:::

### Beispiel

~~~jsx {5-9}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// Anmeldung zum "indent" Event
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("Die Einrückung wurde vergrößert");
});
~~~

**Änderungsprotokoll:** Dieses Event wurde in Version 2.0 eingeführt
