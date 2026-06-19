---
sidebar_label: import
title: import Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das import-Event. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# import

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem die Option "Import" in der Menüleiste oder über Event-Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **import**-Events kann ein Objekt mit folgendem Parameter entgegennehmen:

- `html` - ein Textwert im HTML-Format

:::info[Info]
Zur Behandlung interner Events können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "import"-Event abonnieren
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// neuen Wert importieren
editor.api.exec("import", {
    html: "<h2>some value</h2>" // ruft einfach setValue auf
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.0 hinzugefügt
