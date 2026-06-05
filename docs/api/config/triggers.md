---
sidebar_label: triggers
title: triggers Config
description: You can learn about the triggers config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# triggers

### Description

@short: Optional. Defines dropdown triggers for inserting mentions, tags, and other tokens

When a user types a configured character (for example, `@` or `#`), RichText opens a dropdown with predefined items. When the user selects an item, RichText inserts it into the document as a non-editable token (`<a data-token="..." data-token-id="...">`).

### Usage

~~~jsx {}
triggers?: Array<{
    trigger: string,
    data: Array<{ id?: string; label?: string; url?: string }>
        | ((query: string) =>
            Array<{ id?: string; label?: string; url?: string }>
            | Promise<Array<{ id?: string; label?: string; url?: string }>>),
    showTrigger?: boolean,
    action?: (item) => void
}>;
~~~

### Parameters

Each entry of the `triggers` array accepts the following fields:

- `trigger` - (required) the character that opens the suggestion dropdown (for example, `"@"`, `"#"`, `"/"`, `"$"`)
- `data` - (required) the data source for the dropdown; can be an array, a sync function, or an async function. See [Data source forms](#data-source-forms)
- `showTrigger` - (optional) when `true` (default), RichText keeps the trigger character in the inserted token (for example, `@Alice`); when `false`, RichText inserts only `label` (for example, `Alice`)
- `action` - (optional) a custom callback called when a user selects an item. When set, RichText removes the typed trigger text (the trigger character plus the query) and calls `action(item)` **instead of** inserting a token. The callback receives the picked item and can insert any content instead of selected one. The `action` parameter takes priority over `showTrigger`, which has no effect when `action` is set. See [Custom action](#custom-action)

### Data source forms

* **Static array** — RichText filters the array automatically by matching the query against `label` (case-insensitive, `startsWith`):

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

* **Sync function** — RichText calls your function with the current `query` string; you do the filtering and return the matching array:

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

* **Async function** — RichText calls your function with the current `query` string; return a `Promise` that resolves to the matching array. Useful for server-side search:

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

### Suggestion item fields

Each item in `data` (or each item returned by a function) has the following fields:

- `id` - (optional) unique identifier saved on the inserted token. If omitted, RichText generates an ID automatically
- `label` - (optional) the text shown in the dropdown and inserted into the document. Required only for the default rendering; with a custom [`triggerTemplate`](api/config/trigger-template.md) you can render items from other fields (for example, `template(({ data }) => data.id)`) and omit `label`
- `url` - (optional) URL associated with the item. RichText stores the URL as the inserted token's `href` attribute. `Ctrl+Click` on the token opens the link

An item may also include any number of custom fields beyond `id`, `label`, and `url` (for example, `code` for an emoji, or `image` and `name` for an avatar). These extra fields are passed through to the [`triggerTemplate`](api/config/trigger-template.md) callback and to the `action` callback.

### Rendered token

When a user selects an item in the dropdown, RichText inserts a non-editable token element into the document:

~~~html {}
<a data-token="@" data-token-id="alice" href="mailto:alice@example.com">@Alice</a>
~~~

- `@` (in `data-token="@"`) - the item's `trigger`
- `alice` (in `data-token-id="alice"`) - the item's `id`
- `mailto:alice@example.com` (in `href="mailto:alice@example.com"`) - the item's `url`
- `@Alice` - the combination of `trigger` and `label`; with `showTrigger: false` it would be just `Alice`

Use the `data-token` and `data-token-id` attributes to target tokens with CSS, for example, to highlight all mentions of a user:

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
}
~~~

### Custom action

By default, when a user picks an item, RichText inserts the item into the document as a token. Set the `action` parameter to run your code instead: RichText removes the typed trigger string (the trigger character and the query) and calls the `action(item)` callback with the picked item. No token is inserted, so you can decide what to add to the document (or run your custom code). The `action` parameter takes priority over `showTrigger`. When `action` is set, `showTrigger` is ignored.

#### Add emoji

A common use case is inserting an emoji from a `:` trigger, where each item contains a custom `code` field. Pair `action` with [`triggerTemplate`](api/config/trigger-template.md) so the dropdown shows the emoji itself instead of just its label:

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
    // render the emoji itself (not just its label) in the dropdown
    triggerTemplate: template(({ data }) => `${emojiFromCode(data.code)} ${data.label}`)
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}
~~~

#### Group emoji by categories

When the `data` parameter is a function, you are not limited to the built-in `label` matching. You can run your own filtering and keep category headers in the dropdown. Add header items that include a `label` field and do not include `code`. The `data` function first finds the emoji that match the query, then returns emoji together with the headers of the categories that still have matches:

~~~jsx {18-26,31-33,41}
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

#### Add slash-style command menu

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

### Example

The following example sets up two triggers: `@` for mentions (each item carries a `url` that becomes the token's `href`) and `#` for tags (label only):

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

**Change log:** The property was added in v2.1

**Related articles:** [Mentions and tags](guides/mentions_and_tags.md)
