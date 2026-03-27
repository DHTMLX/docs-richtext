---
sidebar_label: import
title: import Ereignis
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das import-Ereignis. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# import

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem die Option "Importieren" in der menubar ausgewählt oder über Event-Bus-Methoden aufgerufen wird

### Verwendung {#usage}

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des **import**-Ereignisses kann ein Objekt mit folgendem Parameter entgegennehmen:

- `html` - ein Textwert im HTML-Format

:::info[Info]
Zur Verarbeitung interner Ereignisse können Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md) verwenden
:::

### Beispiel {#example}

~~~jsx {5-13}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "import"-Ereignis abonnieren
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// neuen Wert importieren
editor.api.exec("import", {
    html: "<h2>some value</h2>" // ruft einfach setValue auf
});
~~~

**Änderungsprotokoll:** Das Ereignis wurde in v2.0 hinzugefügt
