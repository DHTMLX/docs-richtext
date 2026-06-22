---
sidebar_label: show-suggest
title: show-suggest Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das show-suggest-Event. Entwicklerhandbücher und API-Referenz, Code-Beispiele und Live-Demos sowie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText stehen zur Verfügung.
---

# show-suggest

### Beschreibung {#description}

@short: Wird ausgelöst, wenn das Vorschlag-Dropdown für einen konfigurierten Trigger geöffnet wird

Das `show-suggest`-Event wird ausgelöst, nachdem RichText eine nicht leere Liste von Einträgen für den aktuellen Trigger aufgelöst hat, kurz bevor das Dropdown geöffnet wird. Fangen Sie das Event ab, um die Einträge anzupassen, das Dropdown zu verschieben oder es abzubrechen.

### Verwendung {#usage}

~~~jsx {}
"show-suggest": ({
    trigger: string,
    query: string,
    items: Array<{
        id?: string | number,
        label?: string,
        url?: string,
        // ...beliebige benutzerdefinierte Felder aus der Datenquelle des Triggers
    }>,
    pos: DOMRect
}) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des `show-suggest`-Events empfängt ein Objekt mit den folgenden Feldern:

- `trigger` – das Trigger-Zeichen, das das Dropdown geöffnet hat
- `query` – der nach dem Trigger-Zeichen eingegebene Text (wird zum Filtern der `items` verwendet)
- `items` – die aufgelöste (und bereits gefilterte) Liste der Vorschlagseinträge. Jeder Eintrag folgt der [Form eines Vorschlagseintrags](api/config/triggers.md#suggestion-item-fields): optionale Felder `id`, `label` und `url` sowie beliebige benutzerdefinierte Felder (z. B. `image` oder `name`), die von [`triggerTemplate`](api/config/trigger-template.md) verwendet werden
- `pos` – ein `DOMRect`, der die Cursor-Position beschreibt; wird verwendet, um das Dropdown auf dem Bildschirm zu positionieren

:::info[Info]
Um interne Events zu verarbeiten, verwenden Sie die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md).
:::

### Beispiel {#example}

~~~jsx {6-11}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }]
    // weitere Konfigurationseigenschaften
});
// Vorschlagsliste überschreiben, bevor das Dropdown geöffnet wird
editor.api.intercept("show-suggest", (state) => {
    if (state.trigger === "@" && state.query === "") {
        return { ...state, items: state.items.slice(0, 5) };
    }
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.1 hinzugefügt

**Verwandtes Beispiel:** [RichText. Erwähnungen, Tags und asynchrone Suche](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

**Verwandte Artikel:** [Erwähnungen und Tags](guides/mentions_and_tags.md)
