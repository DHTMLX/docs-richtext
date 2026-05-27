---
sidebar_label: Mentions and tags
title: Mentions and tags
description: 'Learn how to configure @mentions, #tags, and custom dropdown triggers in DHTMLX RichText. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.'
---

# Mentions and tags

RichText supports user-defined trigger characters that open a suggestion dropdown inside the editor. When the user picks an item, RichText inserts a non-editable token into the document. Typical use cases:

- `@` — mention a person
- `#` — apply a tag
- `/` — insert a command or template
- `$` — insert a financial ticker or variable

Configure the behavior through the [`triggers`](api/config/triggers.md) array. Each entry binds one character to a data source.

## Configure triggers

Each trigger is an object `{ trigger, data, showTrigger? }` within the [`triggers`](api/config/triggers.md) array. The [`data`](api/config/triggers.md/#data-source-forms) field can take three forms:

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

When the user picks an item, RichText inserts it as an `<a>` element with two data attributes:

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

editor.api.on("insert-token", ({ trigger, label, id }) => {
    console.log(`Inserted ${trigger}${label} (id: ${id})`);
});
~~~

## Customize the dropdown item

By default the dropdown shows the `label` of each item. To render custom suggestions (for example, an avatar plus a name and an email) pass a template via the [`triggerTemplate`](api/config/trigger-template.md) property.

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

## Related API

- [`triggers`](api/config/triggers.md)
- [`triggerTemplate`](api/config/trigger-template.md)
- [`insert-token`](api/events/insert-token.md)
- [`show-suggest`](api/events/show-suggest.md)
- [`hide-suggest`](api/events/hide-suggest.md)
