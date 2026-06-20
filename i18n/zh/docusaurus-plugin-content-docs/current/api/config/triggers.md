---
sidebar_label: triggers
title: triggers 配置项
description: 您可以在 DHTMLX JavaScript RichText 库的文档中了解 triggers 配置项。浏览开发指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX RichText 的免费 30 天评估版本。
---

# triggers

### 描述 {#description}

@short: 可选。定义用于插入提及、标签及其他标记的下拉触发器

当用户输入已配置的字符（例如 `@` 或 `#`）时，RichText 会打开一个包含预定义条目的下拉列表。当用户选择某个条目时，RichText 会将其作为不可编辑的标记（`<a data-token="..." data-token-id="...">`）插入文档中。

### 用法 {#usage}

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

### 参数 {#parameters}

`triggers` 数组中的每个条目接受以下字段：

- `trigger` —（必填）打开建议下拉列表的字符（例如 `"@"`、`"#"`、`"/"`、`"$"`）
- `data` —（必填）下拉列表的数据源；可以是数组、同步函数或异步函数。参见[数据源形式](#data-source-forms)
- `showTrigger` —（可选）当值为 `true`（默认值）时，RichText 在插入的标记中保留触发字符（例如 `@Alice`）；当值为 `false` 时，RichText 仅插入 `label`（例如 `Alice`）
- `action` —（可选）当用户选择条目时调用的自定义 callback。设置后，RichText 会删除已输入的触发文本（触发字符加查询字符串），并调用 `action(item)`，**而不是**插入标记。该 callback 接收选中的条目，可以插入任意内容来替代所选内容。`action` 参数优先于 `showTrigger`，设置 `action` 后 `showTrigger` 无效。参见[自定义 action](#custom-action)

### 数据源形式 {#data-source-forms}

* **静态数组** — RichText 通过将查询字符串与 `label` 进行匹配（不区分大小写，使用 `startsWith`）自动过滤数组：

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

* **同步函数** — RichText 以当前 `query` 字符串为参数调用您的函数；由您执行过滤并返回匹配的数组：

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

* **异步函数** — RichText 以当前 `query` 字符串为参数调用您的函数；返回一个解析为匹配数组的 `Promise`。适用于服务端搜索：

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

### 建议条目字段 {#suggestion-item-fields}

`data` 中的每个条目（或函数返回的每个条目）具有以下字段：

- `id` —（可选）保存在插入标记上的唯一标识符。如果省略，RichText 会自动生成一个 ID
- `label` —（可选）在下拉列表中显示并插入文档的文本。仅在使用默认渲染时为必填项；使用自定义 [`triggerTemplate`](api/config/trigger-template.md) 时，您可以从其他字段渲染条目（例如 `template(({ data }) => data.id)`），并省略 `label`
- `url` —（可选）与条目关联的 URL。RichText 将该 URL 存储为插入标记的 `href` 属性。`Ctrl+Click` 标记可打开链接

条目还可以包含 `id`、`label` 和 `url` 之外的任意数量的自定义字段（例如，用于 emoji 的 `code`，或用于头像的 `image` 和 `name`）。这些额外字段会传递给 [`triggerTemplate`](api/config/trigger-template.md) callback 和 `action` callback。

### 渲染的标记 {#rendered-token}

当用户在下拉列表中选择条目时，RichText 会向文档中插入一个不可编辑的标记元素：

~~~html {}
<a data-token="@" data-token-id="alice" href="mailto:alice@example.com">@Alice</a>
~~~

- `@`（在 `data-token="@"` 中）— 条目的 `trigger`
- `alice`（在 `data-token-id="alice"` 中）— 条目的 `id`
- `mailto:alice@example.com`（在 `href="mailto:alice@example.com"` 中）— 条目的 `url`
- `@Alice` — `trigger` 与 `label` 的组合；当 `showTrigger: false` 时，仅显示 `Alice`

使用 `data-token` 和 `data-token-id` 属性通过 CSS 定位标记，例如高亮显示某个用户的所有提及：

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
}
~~~

### 自定义 action {#custom-action}

默认情况下，当用户选择条目时，RichText 会将该条目作为标记插入文档。设置 `action` 参数可改为运行您的自定义代码：RichText 会删除已输入的触发字符串（触发字符和查询字符串），并以选中条目为参数调用 `action(item)` callback。由于不会插入标记，您可以自行决定向文档添加的内容（或运行自定义代码）。`action` 参数优先于 `showTrigger`。设置 `action` 后，`showTrigger` 将被忽略。

#### 插入 emoji {#add-emoji}

一个常见用例是通过 `:` 触发器插入 emoji，其中每个条目包含一个自定义 `code` 字段。将 `action` 与 [`triggerTemplate`](api/config/trigger-template.md) 配合使用，可以在下拉列表中直接显示 emoji 本身，而不仅仅是其标签：

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
    // 在下拉菜单中渲染表情符号本身（而不仅仅是其标签）
    triggerTemplate: template(({ data }) => `${emojiFromCode(data.code)} ${data.label}`)
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}
~~~

#### 按分类分组 emoji {#group-emoji-by-categories}

当 `data` 参数是函数时，您不受内置 `label` 匹配的限制，可以运行自定义过滤逻辑，并在下拉列表中保留分类标题。添加包含 `label` 字段但不含 `code` 的标题条目。`data` 函数首先找到与查询匹配的 emoji，然后将 emoji 连同仍有匹配项的分类标题一起返回：

~~~jsx {18-26,31-33,41}
const { template, Richtext } = richtext;

// 标题条目不含 `code` 字段；表情符号条目则包含
const emoji = [
    { id: "$smileys", label: "Smileys",                 category: 1 }, // 分类
    { id: "grinning", label: "grinning", code: "1F600", category: 1 },
    { id: "smile",    label: "smile",    code: "1F604", category: 1 },
    { id: "$animals", label: "Animals",                 category: 2 }, // 分类
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
                // 保留匹配的表情符号以及仍有匹配项的分类标题
                return emoji.filter(item =>
                    item.code ? matched.includes(item) : categories.has(item.category)
                );
            },
            action: item => editor.insertValue(`<span>${emojiFromCode(item.code)} </span>`)
        }
    ],
    // 正常渲染表情符号行，并以粗体渲染分类标题
    triggerTemplate: template(({ data }) =>
        data.code ? `${emojiFromCode(data.code)} ${data.label}` : `<b>${data.label}</b>`
    )
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}

// 标题不含 `code` —— 忽略对它们的选择，使其永远不会被插入
editor.api.intercept("insert-token", ({ data }) => !!data.code);
~~~

#### 添加斜杠风格命令菜单 {#add-slash-style-command-menu}

您可以使用 `action` 构建斜杠风格的命令菜单（类似 Notion 或 Slack 中的 `/`）。将命令名称存储在每个条目的 `id` 中，将其选项存储在自定义 `config` 字段中，然后通过 callback 使用 [`api.exec`](api/internal/exec.md) 执行命令：

~~~jsx {13}
// 每个条目在 `id` 中存储一个 api.exec 操作名称，在 `config` 中存储其参数
const commands = [
    { id: "set-text-style", label: "Heading 1",     config: { tag: "h1" } },
    { id: "insert-list",    label: "Bulleted list", config: { type: "bulleted" } },
    { id: "insert-line",    label: "Divider" } // 无 config → 应用 `|| {}`
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

### 示例 {#example}

以下示例设置了两个触发器：`@` 用于提及（每个条目包含一个 `url`，该 URL 将成为标记的 `href`），`#` 用于标签（仅含标签文本）：

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

**变更日志：** 该属性在 v2.1 中添加

**相关文章：** [提及与标签](guides/mentions_and_tags.md)
