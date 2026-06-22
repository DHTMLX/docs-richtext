---
sidebar_label: Erwähnungen und Tags
title: Erwähnungen und Tags
description: 'Erfahren Sie, wie Sie @-Erwähnungen, #-Tags und benutzerdefinierte Dropdown-Trigger in DHTMLX RichText konfigurieren. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.'
---

# Erwähnungen und Tags {#mentions-and-tags}

RichText unterstützt benutzerdefinierte Trigger-Zeichen, die ein Vorschlag-Dropdown im Dokument öffnen. Wenn der Benutzer ein Element auswählt, fügt RichText ein nicht bearbeitbares Token in das Dokument ein. Typische Anwendungsfälle:

- `@` — eine Person erwähnen
- `#` — einen Tag anwenden
- `/` — einen Befehl oder eine Vorlage einfügen
- `$` — ein Finanzsymbol oder eine Variable einfügen
- `:` — ein Emoji einfügen

Konfigurieren Sie das Verhalten über die Eigenschaft [`triggers`](api/config/triggers.md). Jeder Eintrag bindet ein Zeichen an eine Datenquelle.

## Trigger konfigurieren {#configure-triggers}

Jeder Trigger ist ein Objekt `{ trigger, data, showTrigger?, action? }` innerhalb des [`triggers`](api/config/triggers.md)-Arrays. Das Feld [`data`](api/config/triggers.md#data-source-forms) kann drei Formen annehmen:

- Ein statisches Array — RichText filtert es automatisch nach `label` (Groß-/Kleinschreibung wird ignoriert, `startsWith`):

~~~jsx {}
{ trigger: "@", data: people }
~~~

- Eine synchrone Funktion — verwenden Sie diese, um Ergebnisse selbst zu filtern:

~~~jsx {}
{
    trigger: "#",
    data: query => tags.filter(t =>
        t.label.toLowerCase().startsWith(query.toLowerCase())
    )
}
~~~

- Eine asynchrone Funktion — verwenden Sie diese für die serverseitige Suche:

~~~jsx {}
{
    trigger: "+",
    data: async query => {
        const res = await fetch(`/api/users?q=${encodeURIComponent(query)}`);
        const users = await res.json();
        return users.map(u => ({
            id:    String(u.id),
            label: u.name,
            url:   u.website
        }));
    }
}
~~~

**Verwandtes Beispiel:** [RichText. Erwähnungen, Tags und asynchrone Suche](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

## Token-Darstellung {#token-rendering}

Wenn der Benutzer ein Element aus dem Dropdown auswählt, fügt RichText es als `<a>`-Element mit zwei Datenattributen ein:

~~~html {2-3}
<a 
    data-token="@" 
    data-token-id="alice" 
    href="mailto:alice@example.com">@Alice</a>
~~~

Das Token ist ein einzelner nicht bearbeitbarer Knoten. `Backspace` löscht es in einem Schritt. RichText speichert das Feld `url` in `href`, sodass `Strg+Klick` auf das Token dem Link folgt.

Sie können Tokens mit dem Selektor `data-token` gestalten:

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
    border-radius: 3px;
    padding: 0 2px;
}
~~~

**Verwandte Beispiele:**

- [RichText. Erwähnungen suchen und hervorheben](https://snippet.dhtmlx.com/8y6zvzh2?tag=richtext)
- [RichText. Alle Erwähnungen hervorheben](https://snippet.dhtmlx.com/2rbo12jx?tag=richtext)

## Trigger-Zeichen ausblenden {#hide-the-trigger-character}

Setzen Sie `showTrigger: false` auf einem Trigger, um nur die Element-Beschriftung ohne das Trigger-Symbol einzufügen:

~~~jsx {4}
{
    trigger: "/",
    data: commands,
    showTrigger: false
}
~~~

## Tastaturinteraktion {#keyboard-interaction}

Im Vorschlag-Dropdown können Sie die folgenden Tastenkürzel verwenden:

- `↑` / `↓` — zwischen Elementen navigieren
- `Enter` — das aktive Element einfügen
- `Escape` — das Dropdown schließen ohne einzufügen

## Vorschlags-Events abhören {#listen-to-suggestion-events}

Drei Events stellen den Dropdown-Lebenszyklus über den Event Bus bereit:

- [`insert-token`](api/events/insert-token.md) — wird ausgelöst, wenn ein Benutzer ein Element auswählt
- [`show-suggest`](api/events/show-suggest.md) — wird ausgelöst, wenn das Dropdown geöffnet wird
- [`hide-suggest`](api/events/hide-suggest.md) — wird ausgelöst, wenn das Dropdown geschlossen wird

~~~jsx {5-7}
const editor = new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }]
});

editor.api.on("insert-token", ({ data, trigger, showTrigger }) => {
    console.log(`Inserted ${trigger}${data.label} (id: ${data.id})`);
});
~~~

## Dropdown-Element anpassen {#customize-the-dropdown-item}

Standardmäßig zeigt das Dropdown die `label`-Eigenschaft jedes Elements an. Um benutzerdefinierte Vorschläge darzustellen (z. B. Avatar, Name und E-Mail-Adresse), übergeben Sie eine Vorlage über die Eigenschaft [`triggerTemplate`](api/config/trigger-template.md).

### Beispiel {#example}

~~~jsx {1,4-9}
const { template } = richtext;

new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }],
    triggerTemplate: template(({ data, trigger }) => `
        <div class="user">
            <div class="user-name">${trigger}${data.label}</div>
            <div class="user-url">${data.url || ""}</div>
        </div>
    `)
});
~~~

**Verwandtes Beispiel:** [RichText. Benutzerdefinierte Dropdown-Vorlage pro Trigger](https://snippet.dhtmlx.com/0p3bbnhz?tag=richtext)

## Benutzerdefinierte Aktion bei Auswahl {#custom-action-on-select}

Standardmäßig wird ein ausgewähltes Element als Token in das Dokument eingefügt. Um stattdessen eigenen Code auszuführen, fügen Sie dem Trigger einen `action`-Callback hinzu. RichText entfernt den eingegebenen Trigger-Text und ruft `action(item)` mit dem ausgewählten Element auf — es wird kein Token eingefügt, sodass Sie selbst entscheiden können, was hinzugefügt wird.

:::note[Hinweis]
`action` hat Vorrang vor `showTrigger`. Wenn `action` gesetzt ist, wird `showTrigger` ignoriert.
:::

### Emoji einfügen {#add-emoji}

Ein `:` Trigger kann ein Emoji einfügen, wobei jedes Element ein benutzerdefiniertes Feld `code` enthält. Kombinieren Sie `action` mit [`triggerTemplate`](api/config/trigger-template.md), damit das Dropdown das Emoji statt nur seiner Beschriftung anzeigt:

~~~jsx {18-20,24}
const { template, Richtext } = richtext;

const emoji = [
    {
        id: "apple", label: "apple", code: "1F34E"
    },
    {
        id: "blue_car", label: "blue_car", code: "1F699"
    },
    {
        id: "computer", label: "computer", code: "1F4BB"
    }
];

const editor = new Richtext("#root", {
    triggers: [
        {
            trigger: ":",
            data: emoji, // [{ id: "apple", label: "apple", code: "1F34E" }, ...]
            action: item => editor.insertValue(`<span>${emojiFromCode(item.code)} </span>`)
        }
    ],
    // das Emoji selbst (nicht nur seine Beschriftung) im Dropdown anzeigen
    triggerTemplate: template(({ data }) => `${emojiFromCode(data.code)} ${data.label}`)
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}
~~~

**Verwandtes Beispiel:** [RichText. Emoji-Autovervollständigung](https://snippet.dhtmlx.com/g5z1d868?tag=richtext)

### Emoji nach Kategorien gruppieren {#group-emoji-by-categories}

Wenn der Parameter `data` eine Funktion ist, sind Sie nicht auf den integrierten `label`-Abgleich beschränkt. Sie können eigene Filterlogik implementieren und Kategorieüberschriften im Dropdown beibehalten. Fügen Sie Header-Elemente hinzu, die ein `label`-Feld enthalten, aber kein `code`-Feld. Die `data`-Funktion sucht zunächst die passenden Emoji und gibt diese dann zusammen mit den Überschriften der Kategorien zurück, die noch Treffer enthalten:

~~~jsx {17-26,31-33}
const { template, Richtext } = richtext;

// Header-Elemente haben kein `code`-Feld; Emoji-Elemente enthalten eines
const emoji = [
    { id: "$smileys", label: "Smileys",                 category: 1 }, // Kategorie
    { id: "grinning", label: "grinning", code: "1F600", category: 1 },
    { id: "smile",    label: "smile",    code: "1F604", category: 1 },
    { id: "$animals", label: "Animals",                 category: 2 }, // Kategorie
    { id: "dog",      label: "dog",      code: "1F436", category: 2 },
    { id: "cat",      label: "cat",      code: "1F431", category: 2 }
];

const editor = new Richtext("#root", {
    triggers: [
        {
            trigger: ":",
            data: query => {
                const matched = emoji.filter(item =>
                    item.code &&
                    item.label.toLowerCase().startsWith(query.toLowerCase().trim())
                );
                const categories = new Set(matched.map(item => item.category));
                // passende Emojis behalten plus die Überschriften der Kategorien, die noch Treffer enthalten
                return emoji.filter(item =>
                    item.code ? matched.includes(item) : categories.has(item.category)
                );
            },
            action: item => editor.insertValue(`<span>${emojiFromCode(item.code)} </span>`)
        }
    ],
    // Emoji-Zeilen normal und Kategorieüberschriften fett darstellen
    triggerTemplate: template(({ data }) =>
        data.code ? `${emojiFromCode(data.code)} ${data.label}` : `<b>${data.label}</b>`
    )
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}

// Überschriften haben kein `code` — Auswahl auf ihnen ignorieren, damit sie nie eingefügt werden
editor.api.intercept("insert-token", ({ data }) => !!data.code);
~~~

### Slash-Befehlsmenü hinzufügen {#add-slash-style-command-menu}

Sie können `action` verwenden, um ein Slash-Befehlsmenü zu erstellen (wie `/` in Notion oder Slack). Speichern Sie einen Befehlsnamen in der `id` jedes Elements, dessen Optionen in einem benutzerdefinierten Feld `config`, und lassen Sie den Callback ihn mit [`api.exec`](api/internal/exec.md) ausführen:

~~~jsx {13}
// jedes Element speichert einen api.exec-Aktionsnamen in `id` und seine Parameter in `config`
const commands = [
    { id: "set-text-style", label: "Heading 1",     config: { tag: "h1" } },
    { id: "insert-list",    label: "Bulleted list", config: { type: "bulleted" } },
    { id: "insert-line",    label: "Divider" } // keine Konfiguration → `|| {}` wird angewendet
];

const editor = new richtext.Richtext("#root", {
    triggers: [
        {
            trigger: "/",
            data: commands,
            action: item => editor.api.exec(item.id, item.config || {})
        }
    ]
});
~~~

**Verwandtes Beispiel:** [RichText. Slash-Befehle](https://snippet.dhtmlx.com/e0mrmyam?tag=richtext)

## Verwandte API {#related-api}

- [`triggers`](api/config/triggers.md)
- [`triggerTemplate`](api/config/trigger-template.md)
- [`insert-token`](api/events/insert-token.md)
- [`show-suggest`](api/events/show-suggest.md)
- [`hide-suggest`](api/events/hide-suggest.md)
