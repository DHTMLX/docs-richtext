---
sidebar_label: triggers
title: triggers Config
description: In der Dokumentation der DHTMLX JavaScript RichText-Bibliothek erfahren Sie mehr über die triggers-Konfiguration. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX RichText herunter.
---

# triggers

### Beschreibung {#description}

@short: Optional. Definiert Dropdown-Trigger zum Einfügen von Erwähnungen, Tags und anderen Token

Wenn ein Benutzer ein konfiguriertes Zeichen eingibt (beispielsweise `@` oder `#`), öffnet RichText ein Dropdown mit vordefinierten Elementen. Wählt der Benutzer ein Element aus, fügt RichText es als nicht editierbaren Token (`<a data-token="..." data-token-id="...">`) in das Dokument ein.

### Verwendung {#usage}

~~~jsx {}
triggers?: Array<{
    trigger: string,
    data: Array<{ id?: string | number; label?: string; url?: string }>
        | ((query: string) =>
            Array<{ id?: string | number; label?: string; url?: string }>
            | Promise<Array<{ id?: string | number; label?: string; url?: string }>>),
    showTrigger?: boolean,
    action?: (item) => void
}>;
~~~

### Parameter {#parameters}

Jeder Eintrag des `triggers`-Arrays akzeptiert die folgenden Felder:

- `trigger` - (erforderlich) das Zeichen, das das Vorschlags-Dropdown öffnet (beispielsweise `"@"`, `"#"`, `"/"`, `"$"`)
- `data` - (erforderlich) die Datenquelle für das Dropdown; kann ein Array, eine synchrone Funktion oder eine asynchrone Funktion sein. Siehe [Datenquellen-Formen](#data-source-forms)
- `showTrigger` - (optional) wenn `true` (Standard), behält RichText das Trigger-Zeichen im eingefügten Token (beispielsweise `@Alice`); wenn `false`, fügt RichText nur das `label` ein (beispielsweise `Alice`)
- `action` - (optional) ein benutzerdefinierter Callback, der aufgerufen wird, wenn ein Benutzer ein Element auswählt. Wenn gesetzt, entfernt RichText den eingetippten Trigger-Text (das Trigger-Zeichen plus die Abfrage) und ruft `action(item)` **anstelle** des Einfügens eines Tokens auf. Der Callback empfängt das ausgewählte Element und kann stattdessen beliebigen Inhalt einfügen. Der `action`-Parameter hat Vorrang vor `showTrigger`, das keine Wirkung hat, wenn `action` gesetzt ist. Siehe [Benutzerdefinierte Aktion](#custom-action)

### Datenquellen-Formen {#data-source-forms}

* **Statisches Array** — RichText filtert das Array automatisch, indem es die Abfrage mit `label` abgleicht (Groß-/Kleinschreibung-unabhängig, `startsWith`):

~~~jsx {3-7}
new richtext.Richtext("#root", {
    triggers: [{
        trigger: "@",
        data: [
            { id: "alice", label: "Alice" },
            { id: "bob",   label: "Bob"   }
        ]
    }]
});
~~~

* **Synchrone Funktion** — RichText ruft Ihre Funktion mit dem aktuellen `query`-String auf; Sie führen die Filterung durch und geben das passende Array zurück:

~~~jsx {3-6}
new richtext.Richtext("#root", {
    triggers: [{
        trigger: "#",
        data: query => tags.filter(t =>
            t.label.toLowerCase().startsWith(query.toLowerCase())
        )
    }]
});
~~~

* **Asynchrone Funktion** — RichText ruft Ihre Funktion mit dem aktuellen `query`-String auf; geben Sie ein `Promise` zurück, das zum passenden Array aufgelöst wird. Nützlich für die serverseitige Suche:

~~~jsx {3-8}
new richtext.Richtext("#root", {
    triggers: [{
        trigger: "+",
        data: async query => {
            const res = await fetch(`/api/users?q=${encodeURIComponent(query)}`);
            const users = await res.json();
            return users.map(u => ({ id: String(u.id), label: u.name, url: u.website }));
        }
    }]
});
~~~

### Felder eines Vorschlags-Elements {#suggestion-item-fields}

Jedes Element in `data` (oder jedes von einer Funktion zurückgegebene Element) verfügt über folgende Felder:

- `id` - (optional) eindeutiger Bezeichner, der im eingefügten Token gespeichert wird. Wenn weggelassen, generiert RichText automatisch eine ID
- `label` - (optional) der im Dropdown angezeigte und in das Dokument eingefügte Text. Nur für das Standard-Rendering erforderlich; mit einem benutzerdefinierten [`triggerTemplate`](api/config/trigger-template.md) können Sie Elemente aus anderen Feldern rendern (beispielsweise `template(({ data }) => data.id)`) und `label` weglassen
- `url` - (optional) URL, die dem Element zugeordnet ist. RichText speichert die URL als `href`-Attribut des eingefügten Tokens. `Ctrl+Click` auf den Token öffnet den Link

Ein Element kann auch eine beliebige Anzahl benutzerdefinierter Felder über `id`, `label` und `url` hinaus enthalten (beispielsweise `code` für ein Emoji oder `image` und `name` für einen Avatar). Diese zusätzlichen Felder werden an den [`triggerTemplate`](api/config/trigger-template.md)-Callback und an den `action`-Callback weitergegeben.

### Gerenderter Token {#rendered-token}

Wenn ein Benutzer ein Element im Dropdown auswählt, fügt RichText ein nicht editierbares Token-Element in das Dokument ein:

~~~html {}
<a data-token="@" data-token-id="alice" href="mailto:alice@example.com">@Alice</a>
~~~

- `@` (in `data-token="@"`) - der `trigger` des Elements
- `alice` (in `data-token-id="alice"`) - die `id` des Elements
- `mailto:alice@example.com` (in `href="mailto:alice@example.com"`) - die `url` des Elements
- `@Alice` - die Kombination aus `trigger` und `label`; mit `showTrigger: false` wäre es nur `Alice`

Verwenden Sie die Attribute `data-token` und `data-token-id`, um Token mit CSS anzusprechen, beispielsweise um alle Erwähnungen eines Benutzers hervorzuheben:

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
}
~~~

### Benutzerdefinierte Aktion {#custom-action}

Standardmäßig fügt RichText das ausgewählte Element als Token in das Dokument ein. Setzen Sie den `action`-Parameter, um stattdessen Ihren eigenen Code auszuführen: RichText entfernt den eingetippten Trigger-String (das Trigger-Zeichen und die Abfrage) und ruft den `action(item)`-Callback mit dem ausgewählten Element auf. Es wird kein Token eingefügt, sodass Sie selbst entscheiden können, was dem Dokument hinzugefügt wird (oder Ihren eigenen Code ausführen). Der `action`-Parameter hat Vorrang vor `showTrigger`. Wenn `action` gesetzt ist, wird `showTrigger` ignoriert.

#### Emoji einfügen {#add-emoji}

Ein häufiger Anwendungsfall ist das Einfügen eines Emojis über einen `:`-Trigger, wobei jedes Element ein benutzerdefiniertes `code`-Feld enthält. Kombinieren Sie `action` mit [`triggerTemplate`](api/config/trigger-template.md), damit das Dropdown das Emoji selbst anzeigt und nicht nur sein Label:

~~~jsx {8,12}
const { template, Richtext } = richtext;

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

#### Emoji nach Kategorien gruppieren {#group-emoji-by-categories}

Wenn der `data`-Parameter eine Funktion ist, sind Sie nicht auf den eingebauten `label`-Abgleich beschränkt. Sie können eine eigene Filterung vornehmen und Kategorieüberschriften im Dropdown behalten. Fügen Sie Header-Elemente hinzu, die ein `label`-Feld enthalten, aber kein `code`. Die `data`-Funktion findet zunächst die Emojis, die zur Abfrage passen, und gibt dann die Emojis zusammen mit den Überschriften der Kategorien zurück, die noch Treffer enthalten:

~~~jsx {18-26,31-33,41}
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

#### Slash-Befehlsmenü hinzufügen {#add-slash-style-command-menu}

Sie können `action` verwenden, um ein Slash-Befehlsmenü zu erstellen (wie `/` in Notion oder Slack). Speichern Sie einen Befehlsnamen in der `id` jedes Elements, seine Optionen in einem benutzerdefinierten `config`-Feld, und lassen Sie den Callback ihn mit [`api.exec`](api/internal/exec.md) ausführen:

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

### Beispiel {#example}

Das folgende Beispiel richtet zwei Trigger ein: `@` für Erwähnungen (jedes Element enthält eine `url`, die zum `href` des Tokens wird) und `#` für Tags (nur Label):

~~~jsx {4,11}
new richtext.Richtext("#root", {
    triggers: [
        {
            trigger: "@",
            data: [
                { id: "alice", label: "Alice", url: "mailto:alice@example.com" },
                { id: "bob",   label: "Bob",   url: "mailto:bob@example.com"   }
            ]
        },
        {
            trigger: "#",
            data: [
                { id: "css",  label: "CSS"  },
                { id: "html", label: "HTML" }
            ]
        }
    ]
});
~~~

**Änderungsprotokoll:** Die Eigenschaft wurde in v2.1 hinzugefügt

**Verwandte Beispiele:**

- [RichText. Erwähnungen, Tags und asynchrone Suche](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)
- [RichText. Benutzerdefinierte Dropdown-Vorlage pro Trigger](https://snippet.dhtmlx.com/0p3bbnhz?tag=richtext)
- [RichText. Emoji-Autovervollständigung](https://snippet.dhtmlx.com/g5z1d868?tag=richtext)
- [RichText. Slash-Befehle](https://snippet.dhtmlx.com/e0mrmyam?tag=richtext)
- [RichText. Erwähnungen suchen und hervorheben](https://snippet.dhtmlx.com/8y6zvzh2?tag=richtext)
- [RichText. Alle Erwähnungen hervorheben](https://snippet.dhtmlx.com/2rbo12jx?tag=richtext)

**Verwandte Artikel:** [Erwähnungen und Tags](guides/mentions_and_tags.md)
