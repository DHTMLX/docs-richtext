---
sidebar_label: triggers
title: Конфиг triggers
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о конфиге triggers. Изучайте руководства разработчика и справочник АПИ, проверяйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# triggers

### Описание {#description}

@short: Необязательный. Определяет триггеры выпадающего списка для вставки упоминаний, тегов и других токенов

Когда пользователь вводит настроенный символ (например, `@` или `#`), RichText открывает выпадающий список с заранее заданными элементами. Когда пользователь выбирает элемент, RichText вставляет его в документ как нередактируемый токен (`<a data-token="..." data-token-id="...">`).

### Применение {#usage}

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

### Параметры {#parameters}

Каждый элемент массива `triggers` принимает следующие поля:

- `trigger` - (обязательный) символ, который открывает выпадающий список с подсказками (например, `"@"`, `"#"`, `"/"`, `"$"`)
- `data` - (обязательный) источник данных для выпадающего списка; может быть массивом, синхронной функцией или асинхронной функцией. См. [Формы источника данных](#data-source-forms)
- `showTrigger` - (необязательный) если `true` (по умолчанию), RichText сохраняет символ триггера во вставленном токене (например, `@Alice`); если `false`, RichText вставляет только `label` (например, `Alice`)
- `action` - (необязательный) пользовательский калбэк, вызываемый при выборе элемента пользователем. Если задан, RichText удаляет введённый текст триггера (символ триггера и строку запроса) и вызывает `action(item)` **вместо** вставки токена. Калбэк получает выбранный элемент и может вставить любое содержимое вместо выбранного. Параметр `action` имеет приоритет над `showTrigger`, который не оказывает эффекта, если задан `action`. См. [Пользовательское действие](#custom-action)

### Формы источника данных {#data-source-forms}

* **Статический массив** — RichText автоматически фильтрует массив, сопоставляя запрос с полем `label` (без учёта регистра, `startsWith`):

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

* **Синхронная функция** — RichText вызывает вашу функцию с текущей строкой `query`; вы выполняете фильтрацию и возвращаете подходящий массив:

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

* **Асинхронная функция** — RichText вызывает вашу функцию с текущей строкой `query`; возвращайте `Promise`, который разрешается в подходящий массив. Удобно для серверного поиска:

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

### Поля элемента подсказки {#suggestion-item-fields}

Каждый элемент в `data` (или каждый элемент, возвращаемый функцией) содержит следующие поля:

- `id` - (необязательный) уникальный идентификатор, сохраняемый в вставленном токене. Если не задан, RichText генерирует идентификатор автоматически
- `label` - (необязательный) текст, отображаемый в выпадающем списке и вставляемый в документ. Обязателен только для рендеринга по умолчанию; при использовании пользовательского [`triggerTemplate`](api/config/trigger-template.md) можно рендерить элементы из других полей (например, `template(({ data }) => data.id)`) и не указывать `label`
- `url` - (необязательный) URL, связанный с элементом. RichText сохраняет URL в атрибуте `href` вставленного токена. `Ctrl+Click` по токену открывает ссылку

Элемент также может содержать любое количество пользовательских полей помимо `id`, `label` и `url` (например, `code` для эмодзи, или `image` и `name` для аватара). Эти дополнительные поля передаются в калбэк [`triggerTemplate`](api/config/trigger-template.md) и в калбэк `action`.

### Отрисованный токен {#rendered-token}

Когда пользователь выбирает элемент в выпадающем списке, RichText вставляет в документ нередактируемый элемент-токен:

~~~html {}
<a data-token="@" data-token-id="alice" href="mailto:alice@example.com">@Alice</a>
~~~

- `@` (в `data-token="@"`) - `trigger` элемента
- `alice` (в `data-token-id="alice"`) - `id` элемента
- `mailto:alice@example.com` (в `href="mailto:alice@example.com"`) - `url` элемента
- `@Alice` - сочетание `trigger` и `label`; при `showTrigger: false` это будет просто `Alice`

Используйте атрибуты `data-token` и `data-token-id` для стилизации токенов через CSS, например, чтобы выделить все упоминания пользователя:

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
}
~~~

### Пользовательское действие {#custom-action}

По умолчанию, когда пользователь выбирает элемент, RichText вставляет его в документ как токен. Задайте параметр `action`, чтобы выполнить собственный код вместо этого: RichText удаляет введённую строку триггера (символ триггера и строку запроса) и вызывает калбэк `action(item)` с выбранным элементом. Токен не вставляется, поэтому вы сами решаете, что добавить в документ (или выполняете собственный код). Параметр `action` имеет приоритет над `showTrigger`. Если задан `action`, `showTrigger` игнорируется.

#### Добавление эмодзи {#add-emoji}

Распространённый сценарий использования — вставка эмодзи по триггеру `:`, где каждый элемент содержит пользовательское поле `code`. Совместите `action` с [`triggerTemplate`](api/config/trigger-template.md), чтобы в выпадающем списке отображался сам эмодзи, а не только его label:

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
    // отображение самого эмодзи (а не только его названия) в выпадающем списке
    triggerTemplate: template(({ data }) => `${emojiFromCode(data.code)} ${data.label}`)
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}
~~~

#### Группировка эмодзи по категориям {#group-emoji-by-categories}

Когда параметр `data` является функцией, вы не ограничены встроенным сопоставлением по полю `label`. Вы можете реализовать собственную фильтрацию и сохранить заголовки категорий в выпадающем списке. Добавьте элементы-заголовки, содержащие поле `label`, но не содержащие `code`. Функция `data` сначала находит эмодзи, соответствующие запросу, затем возвращает их вместе с заголовками категорий, в которых ещё есть совпадения:

~~~jsx {18-26,31-33,41}
const { template, Richtext } = richtext;

// элементы-заголовки не содержат поля `code`; элементы-эмодзи его содержат
const emoji = [
    { id: "$smileys", label: "Smileys",                 category: 1 }, // категория
    { id: "grinning", label: "grinning", code: "1F600", category: 1 },
    { id: "smile",    label: "smile",    code: "1F604", category: 1 },
    { id: "$animals", label: "Animals",                 category: 2 }, // категория
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
                // сохраняем подходящие эмодзи вместе с заголовками категорий, в которых остались совпадения
                return emoji.filter(item =>
                    item.code ? matched.includes(item) : categories.has(item.category)
                );
            },
            action: item => editor.insertValue(`<span>${emojiFromCode(item.code)} </span>`)
        }
    ],
    // отображение строк с эмодзи обычным шрифтом, а заголовков категорий — жирным
    triggerTemplate: template(({ data }) =>
        data.code ? `${emojiFromCode(data.code)} ${data.label}` : `<b>${data.label}</b>`
    )
});

function emojiFromCode(code) {
    return String.fromCodePoint(parseInt(code, 16));
}

// заголовки не имеют поля `code` — игнорируем их выбор, чтобы они никогда не вставлялись
editor.api.intercept("insert-token", ({ data }) => !!data.code);
~~~

#### Добавление командного меню в стиле slash {#add-slash-style-command-menu}

Вы можете использовать `action` для создания командного меню в стиле slash (как `/` в Notion или Slack). Сохраните имя команды в поле `id` каждого элемента, её параметры — в пользовательском поле `config`, и позвольте калбэку выполнить команду через [`api.exec`](api/internal/exec.md):

~~~jsx {13}
// каждый элемент хранит название действия api.exec в `id`, а его параметры — в `config`
const commands = [
    { id: "set-text-style", label: "Heading 1",     config: { tag: "h1" } },
    { id: "insert-list",    label: "Bulleted list", config: { type: "bulleted" } },
    { id: "insert-line",    label: "Divider" } // конфигурация отсутствует → применяется `|| {}`
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

### Пример {#example}

В следующем примере настраиваются два триггера: `@` для упоминаний (каждый элемент содержит `url`, который становится атрибутом `href` токена) и `#` для тегов (только label):

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

**История изменений:** Свойство добавлено в v2.1

**Связанные статьи:** [Упоминания и теги](guides/mentions_and_tags.md)
