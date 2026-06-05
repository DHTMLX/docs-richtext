---
sidebar_label: Mentions and tags
title: Mentions and tags
description: 'Learn how to configure @mentions, #tags, and custom dropdown triggers in DHTMLX RichText. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.'
---

# Mentions and tags

RichText supports user-defined trigger characters that open a suggestion dropdown inside the document. When the user picks an item, RichText inserts a non-editable token into the document. Typical use cases:

- `@` — mention a person
- `#` — apply a tag
- `/` — insert a command or template
- `$` — insert a financial ticker or variable
- `:` — insert an emoji

Configure the behavior through the [`triggers`](api/config/triggers.md) property. Each entry binds one character to a data source.

## Configure triggers

Each trigger is an object `{ trigger, data, showTrigger?, action? }` within the [`triggers`](api/config/triggers.md) array. The [`data`](api/config/triggers.md#data-source-forms) field can take three forms:

- A static array — RichText filters it automatically by `label` (case-insensitive, `startsWith`):

~~~jsx {}
{ trigger: "@", data: people }
~~~

- A sync function — use it to filter results yourself:

~~~jsx {}
{
    trigger: "#",
    data: query => tags.filter(t =>
        t.label.toLowerCase().startsWith(query.toLowerCase())
    )
}
~~~

- An async function — use it for server-side search:

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

## Token rendering

When the user picks an item from the dropdown, RichText inserts it as an `<a>` element with two data attributes:

~~~html {2-3}
<a 
    data-token="@" 
    data-token-id="alice" 
    href="mailto:alice@example.com">@Alice</a>
~~~

The token is a single non-editable node. `Backspace` deletes it in one step. RichText stores the `url` field in `href`, so `Ctrl+Click` on the token follows the link.

You can style tokens with the `data-token` selector:

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
    border-radius: 3px;
    padding: 0 2px;
}
~~~

## Hide the trigger character

Set `showTrigger: false` on a trigger to insert only the item label, without the trigger symbol:

~~~jsx {4}
{
    trigger: "/",
    data: commands,
    showTrigger: false
}
~~~

## Keyboard interaction

Inside the suggestion dropdown you can use the following shortcuts:

- `↑` / `↓` — move between items
- `Enter` — insert the active item
- `Escape` — close the dropdown without inserting

## Listen to suggestion events

Three events expose the dropdown lifecycle through the Event Bus:

- [`insert-token`](api/events/insert-token.md) — fires when a user picks an item
- [`show-suggest`](api/events/show-suggest.md) — fires when the dropdown opens
- [`hide-suggest`](api/events/hide-suggest.md) — fires when the dropdown closes

~~~jsx {5-7}
const editor = new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }]
});

editor.api.on("insert-token", ({ data, trigger, showTrigger }) => {
    console.log(`Inserted ${trigger}${data.label} (id: ${data.id})`);
});
~~~

## Customize the dropdown item

By default the dropdown shows the `label` of each item. To render custom suggestions (for example, avatar, name and email) pass a template via the [`triggerTemplate`](api/config/trigger-template.md) property.

### Example

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

## Custom action on select

By default, picking an item inserts it into the document as a token. To run your own code instead, add an `action` callback to the trigger. RichText removes the typed trigger text and calls `action(item)` with the picked item — no token is inserted, so you can decide what to add.

:::note
`action` takes priority over `showTrigger`. When `action` is set, `showTrigger` is ignored.
:::

### Add emoji

A `:` trigger can insert an emoji, where each item includes a custom `code` field. Pair `action` with [`triggerTemplate`](api/config/trigger-template.md) so the dropdown shows the emoji instead of just its label:

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
    // render the emoji itself (not just its label) in the dropdown
    triggerTemplate: template(({ data }) => `${emojiFromCode(data.code)} ${data.label}`)
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}
~~~

### Group emoji by categories

When the `data` parameter is a function, you are not limited to the built-in `label` matching. You can run your own filtering and keep category headers in the dropdown. Add header items that include a `label` field and do not include `code`. The `data` function first finds the emoji that match the query, then returns emoji together with the headers of the categories that still have matches:

~~~jsx {17-26,31-33}
const { template, Richtext } = richtext;

// header items carry no `code` field; emoji items include one
const emoji = [
    { id: "$smileys", label: "Smileys",                 category: 1 }, // category
    { id: "grinning", label: "grinning", code: "1F600", category: 1 },
    { id: "smile",    label: "smile",    code: "1F604", category: 1 },
    { id: "$animals", label: "Animals",                 category: 2 }, // category
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
                // keep matching emoji plus the headers of categories that still match
                return emoji.filter(item =>
                    item.code ? matched.includes(item) : categories.has(item.category)
                );
            },
            action: item => editor.insertValue(`<span>${emojiFromCode(item.code)} </span>`)
        }
    ],
    // render emoji rows normally and category headers in bold
    triggerTemplate: template(({ data }) =>
        data.code ? `${emojiFromCode(data.code)} ${data.label}` : `<b>${data.label}</b>`
    )
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}

// headers have no `code` — ignore picks on them so they are never inserted
editor.api.intercept("insert-token", ({ data }) => !!data.code);
~~~

### Add slash-style command menu

You can use `action` to build a slash-style command menu (like `/` in Notion or Slack). Store a command name in each item's `id`, its options in a custom `config` field, and let the callback run it with [`api.exec`](api/internal/exec.md):

~~~jsx {13}
// each item stores an api.exec action name in `id` and its parameters in `config`
const commands = [
    { id: "set-text-style", label: "Heading 1",     config: { tag: "h1" } },
    { id: "insert-list",    label: "Bulleted list", config: { type: "bulleted" } },
    { id: "insert-line",    label: "Divider" } // no config → `|| {}` applies
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

## Related API

- [`triggers`](api/config/triggers.md)
- [`triggerTemplate`](api/config/trigger-template.md)
- [`insert-token`](api/events/insert-token.md)
- [`show-suggest`](api/events/show-suggest.md)
- [`hide-suggest`](api/events/hide-suggest.md)
