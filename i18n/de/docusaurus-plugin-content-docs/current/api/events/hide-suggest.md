---
sidebar_label: hide-suggest
title: hide-suggest Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie alles über das hide-suggest Event. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# hide-suggest

### Beschreibung {#description}

@short: Wird ausgelöst, wenn das Vorschläge-Dropdown geschlossen wird

Das Event wird ausgelöst, wenn eines der folgenden Ereignisse eintritt:

- der Benutzer wählt ein Element aus dem Dropdown aus
- der Benutzer drückt `Escape`
- der Cursor verlässt den Trigger-Kontext (zum Beispiel durch `Backspace` vor dem Trigger-Zeichen)
- die aktuelle Suchanfrage keine Treffer liefert

### Verwendung {#usage}

~~~jsx {}
"hide-suggest": () => boolean | void;
~~~

### Parameter {#parameters}

Der `hide-suggest`-Event-Callback erhält keine Parameter.

:::info[Info]
Um interne Events zu verarbeiten, verwenden Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md).
:::

### Beispiel {#example}

~~~jsx {5-7}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "hide-suggest"-Event abonnieren
editor.api.on("hide-suggest", () => {
    console.log("Suggestion dropdown closed");
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.1 hinzugefügt
