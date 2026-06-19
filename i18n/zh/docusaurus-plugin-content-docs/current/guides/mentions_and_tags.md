---
sidebar_label: 提及与标签
title: 提及与标签
description: '了解如何在 DHTMLX RichText 中配置 @提及、#标签以及自定义下拉触发器。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX RichText 的 30 天免费试用版。'
---

# 提及与标签 {#mentions-and-tags}

RichText 支持用户自定义触发字符，在文档中输入后会弹出建议下拉菜单。用户从菜单中选择一项后，RichText 会将一个不可编辑的 token 插入文档。典型使用场景：

- `@` — 提及某人
- `#` — 添加标签
- `/` — 插入命令或模板
- `$` — 插入金融代码或变量
- `:` — 插入表情符号

通过 [`triggers`](api/config/triggers.md) 属性配置相关行为。每个条目将一个字符绑定到一个数据源。

## 配置触发器 {#configure-triggers}

每个触发器是 [`triggers`](api/config/triggers.md) 数组中形如 `{ trigger, data, showTrigger?, action? }` 的对象。[`data`](api/config/triggers.md#data-source-forms) 字段支持三种形式：

- 静态数组 — RichText 会自动按 `label` 进行过滤（不区分大小写，使用 `startsWith`）：

~~~jsx {}
{ trigger: "@", data: people }
~~~

- 同步函数 — 由你自己处理结果过滤：

~~~jsx {}
{
    trigger: "#",
    data: query => tags.filter(t =>
        t.label.toLowerCase().startsWith(query.toLowerCase())
    )
}
~~~

- 异步函数 — 用于服务端搜索：

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

## Token 渲染 {#token-rendering}

用户从下拉菜单中选择一项后，RichText 会将其以带有两个 data 属性的 `<a>` 元素形式插入：

~~~html {2-3}
<a 
    data-token="@" 
    data-token-id="alice" 
    href="mailto:alice@example.com">@Alice</a>
~~~

该 token 是一个不可编辑的单节点。按 `Backspace` 可一次性将其删除。RichText 将 `url` 字段存储在 `href` 中，因此 `Ctrl+Click` token 可跳转链接。

你可以使用 `data-token` 选择器为 token 设置样式：

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
    border-radius: 3px;
    padding: 0 2px;
}
~~~

## 隐藏触发字符 {#hide-the-trigger-character}

在触发器上设置 `showTrigger: false`，可仅插入条目标签，而不显示触发符号：

~~~jsx {4}
{
    trigger: "/",
    data: commands,
    showTrigger: false
}
~~~

## 键盘交互 {#keyboard-interaction}

在建议下拉菜单中可使用以下快捷键：

- `↑` / `↓` — 在条目间移动
- `Enter` — 插入当前选中的条目
- `Escape` — 关闭下拉菜单且不插入内容

## 监听建议事件 {#listen-to-suggestion-events}

三个事件通过 Event Bus 暴露下拉菜单的生命周期：

- [`insert-token`](api/events/insert-token.md) — 用户选择条目时触发
- [`show-suggest`](api/events/show-suggest.md) — 下拉菜单打开时触发
- [`hide-suggest`](api/events/hide-suggest.md) — 下拉菜单关闭时触发

~~~jsx {5-7}
const editor = new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }]
});

editor.api.on("insert-token", ({ data, trigger, showTrigger }) => {
    console.log(`Inserted ${trigger}${data.label} (id: ${data.id})`);
});
~~~

## 自定义下拉条目 {#customize-the-dropdown-item}

默认情况下，下拉菜单显示每个条目的 `label`。如需渲染自定义建议项（例如头像、姓名和邮箱），可通过 [`triggerTemplate`](api/config/trigger-template.md) 属性传入模板。

### 示例 {#example}

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

## 选择时执行自定义动作 {#custom-action-on-select}

默认情况下，选择条目会将其作为 token 插入文档。若要改为执行自己的代码，可在触发器中添加 `action` callback。RichText 会删除已输入的触发文本并以所选条目调用 `action(item)`——不插入 token，由你决定添加什么内容。

:::note[注意]
`action` 优先于 `showTrigger`。设置 `action` 后，`showTrigger` 将被忽略。
:::

### 添加表情符号 {#add-emoji}

`:` 触发器可插入表情符号，每个条目包含自定义的 `code` 字段。将 `action` 与 [`triggerTemplate`](api/config/trigger-template.md) 配合使用，使下拉菜单显示表情符号本身而非仅显示其标签：

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

### 按分类分组表情符号 {#group-emoji-by-categories}

当 `data` 参数为函数时，你不必局限于内置的 `label` 匹配逻辑，可以自行过滤并在下拉菜单中保留分类标题。添加包含 `label` 字段但不含 `code` 的标题条目。`data` 函数首先找到匹配查询的表情符号，然后将表情符号与仍有匹配项的分类标题一并返回：

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

### 添加斜杠命令菜单 {#add-slash-style-command-menu}

你可以使用 `action` 构建斜杠命令菜单（类似 Notion 或 Slack 中的 `/`）。将命令名称存储在每个条目的 `id` 中，将其选项存储在自定义的 `config` 字段中，并让 callback 通过 [`api.exec`](api/internal/exec.md) 执行命令：

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

## 相关 API {#related-api}

- [`triggers`](api/config/triggers.md)
- [`triggerTemplate`](api/config/trigger-template.md)
- [`insert-token`](api/events/insert-token.md)
- [`show-suggest`](api/events/show-suggest.md)
- [`hide-suggest`](api/events/hide-suggest.md)
