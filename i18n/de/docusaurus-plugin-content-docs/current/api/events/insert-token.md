---
sidebar_label: insert-token
title: insert-token Event
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über das insert-token-Event. Lesen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# insert-token

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem der Benutzer ein Vorschlagelement ausgewählt hat und RichText es als Token einfügt

Das `insert-token`-Event wird ausgelöst, nachdem der Benutzer ein Element aus einem Trigger-Dropdown auswählt (Erwähnungen, Tags oder einen benutzerdefinierten Trigger, den Sie über die Eigenschaft [`triggers`](api/config/triggers.md) eingerichtet haben).

### Verwendung {#usage}

~~~jsx {}
"insert-token": ({
    data: {
        id?: string | number,
        label?: string,
        url?: string,
        // ...beliebige benutzerdefinierte Felder aus der Datenquelle des Triggers
    },
    trigger: string,
    showTrigger?: boolean,
    action?: (item) => void
}) => boolean | void;
~~~

### Parameter {#parameters}

Der Callback des `insert-token`-Events erhält ein Objekt mit folgenden Feldern:

- `data` - das ausgewählte Vorschlagelement. Enthält `id`, `label` und `url` des Elements sowie alle benutzerdefinierten Felder, die Sie der `data`-Quelle des Triggers hinzugefügt haben
- `trigger` - das Trigger-Zeichen, das das Dropdown geöffnet hat (zum Beispiel `"@"` oder `"#"`)
- `showTrigger` - wenn `false`, fügt RichText nur `label` ein; andernfalls zeigt das Widget auch das Trigger-Zeichen an (Standard)
- `action` - eine benutzerdefinierte Aktion, die für den passenden [Trigger](api/config/triggers.md) definiert wurde. Wenn gesetzt, hat dieser Parameter Vorrang vor der Token-Einfügung: RichText entfernt den eingegebenen Text (das Trigger-Zeichen und die Abfrage) und ruft stattdessen `action(data)` auf, anstatt ein Token einzufügen. Der Parameter `showTrigger` hat in diesem Fall keine Wirkung

:::info[Info]
Verwenden Sie zur Verarbeitung interner Events die [**Event-Bus-Methoden**](api/overview/event_bus_methods_overview.md).
:::

### Beispiel {#example}

~~~jsx {5-8}
// RichText initialisieren
const editor = new richtext.Richtext("#root", {
    // Konfigurationseigenschaften
});
// das "insert-token"-Event abonnieren
editor.api.on("insert-token", ({ data, trigger, showTrigger }) => {
    console.log(`Inserted ${trigger}${data.label} (id: ${data.id})`);
});
~~~

**Änderungsprotokoll:** Das Event wurde in v2.1 hinzugefügt

**Verwandtes Beispiel:** [RichText. Erwähnungen, Tags und asynchrone Suche](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

**Verwandte Artikel:** [Erwähnungen und Tags](guides/mentions_and_tags.md)
