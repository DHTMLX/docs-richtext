---
sidebar_label: triggers
title: triggers Config
description: You can learn about the triggers config in the documentation of the DHTMLX JavaScript RichText library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX RichText.
---

# triggers

### Description

@short: Optional. Defines dropdown triggers for inserting mentions, tags, and other tokens

When the user types a configured character (for example, `@` or `#`), RichText opens a suggestion dropdown. When the user selects an item, RichText inserts it into the document as a non-editable token (`<a data-token="..." data-token-id="...">`).

### Usage

~~~jsx {}
triggers?: Array<{
    trigger: string,
    data: Array<{ id?: string; label?: string; url?: string }>
        | ((query: string) =>
            Array<{ id?: string; label?: string; url?: string }>
            | Promise<Array<{ id?: string; label?: string; url?: string }>>),
    showTrigger?: boolean
}>;
~~~

### Parameters

Each entry of the `triggers` array accepts the following fields:

- `trigger` - (required) the character that opens the suggestion dropdown (for example, `"@"`, `"#"`, `"/"`, `"$"`)
- `data` - (required) the data source for the dropdown; can be an array, a sync function, or an async function. See [Data source forms](#data-source-forms)
- `showTrigger` - (optional) when `true` (default), RichText keeps the trigger character in the inserted token (`@Alice`); when `false`, RichText inserts only `label` (`Alice`)

### Data source forms

**Static array** — RichText filters the array automatically by matching the query against `label` (case-insensitive, `startsWith`):

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

**Sync function** — RichText calls your function with the current `query` string; you do the filtering and return the matching array:

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

**Async function** — RichText calls your function with the current `query` string; return a `Promise` that resolves to the matching array. Useful for server-side search:

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

- `id` - (optional) unique identifier saved on the inserted token. If omitted, RichText generates an ID automatically.
- `label` - (required) the text shown in the dropdown and inserted into the document
- `url` - (optional) URL associated with the item. RichText stores it on the inserted token as the `href` attribute.

### Rendered token

When a user selects an item, RichText inserts a non-editable token element into the document:

~~~html {}
<a data-token="@" data-token-id="alice" href="mailto:alice@example.com">@Alice</a>
~~~

Use the `data-token` and `data-token-id` attributes to target tokens with CSS, for example, to highlight all mentions of a user:

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
}
~~~

### Example

~~~jsx {2-13}
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
