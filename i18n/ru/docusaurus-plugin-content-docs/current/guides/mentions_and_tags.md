---
sidebar_label: Упоминания и теги
title: Упоминания и теги
description: 'Узнайте, как настроить @упоминания, #теги и пользовательские триггеры выпадающего списка в DHTMLX RichText. Изучите руководства для разработчиков и справочник АПИ, попробуйте примеры кода и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.'
---

# Упоминания и теги {#mentions-and-tags}

RichText поддерживает пользовательские символы-триггеры, которые открывают выпадающий список подсказок внутри документа. Когда пользователь выбирает элемент, RichText вставляет в документ неизменяемый токен. Типичные варианты использования:

- `@` — упомянуть человека
- `#` — применить тег
- `/` — вставить команду или шаблон
- `$` — вставить финансовый тикер или переменную
- `:` — вставить эмодзи

Настройте поведение через свойство [`triggers`](api/config/triggers.md). Каждая запись связывает один символ с источником данных.

## Настройка триггеров {#configure-triggers}

Каждый триггер — это объект `{ trigger, data, showTrigger?, action? }` внутри массива [`triggers`](api/config/triggers.md). Поле [`data`](api/config/triggers.md#data-source-forms) может принимать три формы:

- Статический массив — RichText автоматически фильтрует его по полю `label` (без учёта регистра, метод `startsWith`):

~~~jsx {}
{ trigger: "@", data: people }
~~~

- Синхронная функция — используйте её для самостоятельной фильтрации результатов:

~~~jsx {}
{
    trigger: "#",
    data: query => tags.filter(t =>
        t.label.toLowerCase().startsWith(query.toLowerCase())
    )
}
~~~

- Асинхронная функция — используйте её для поиска на стороне сервера:

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

## Отображение токена {#token-rendering}

Когда пользователь выбирает элемент из выпадающего списка, RichText вставляет его как элемент `<a>` с двумя атрибутами данных:

~~~html {2-3}
<a 
    data-token="@" 
    data-token-id="alice" 
    href="mailto:alice@example.com">@Alice</a>
~~~

Токен является единым неизменяемым узлом. Клавиша `Backspace` удаляет его за один шаг. RichText сохраняет поле `url` в атрибуте `href`, поэтому `Ctrl+Click` по токену открывает ссылку.

Вы можете стилизовать токены с помощью селектора `data-token`:

~~~css {}
.wx-editor-content a[data-token="@"][data-token-id="alice"] {
    background: #fb8500;
    color: #fff;
    border-radius: 3px;
    padding: 0 2px;
}
~~~

## Скрытие символа триггера {#hide-the-trigger-character}

Установите `showTrigger: false` для триггера, чтобы вставлялась только метка элемента без символа триггера:

~~~jsx {4}
{
    trigger: "/",
    data: commands,
    showTrigger: false
}
~~~

## Управление с клавиатуры {#keyboard-interaction}

В выпадающем списке подсказок доступны следующие сочетания клавиш:

- `↑` / `↓` — перемещение между элементами
- `Enter` — вставка активного элемента
- `Escape` — закрытие списка без вставки

## Подписка на события подсказок {#listen-to-suggestion-events}

Три события предоставляют доступ к жизненному циклу выпадающего списка через шину событий:

- [`insert-token`](api/events/insert-token.md) — срабатывает, когда пользователь выбирает элемент
- [`show-suggest`](api/events/show-suggest.md) — срабатывает при открытии выпадающего списка
- [`hide-suggest`](api/events/hide-suggest.md) — срабатывает при закрытии выпадающего списка

~~~jsx {5-7}
const editor = new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }]
});

editor.api.on("insert-token", ({ data, trigger, showTrigger }) => {
    console.log(`Inserted ${trigger}${data.label} (id: ${data.id})`);
});
~~~

## Настройка элемента выпадающего списка {#customize-the-dropdown-item}

По умолчанию выпадающий список отображает поле `label` каждого элемента. Чтобы отрисовать пользовательские подсказки (например, аватар, имя и email), передайте шаблон через свойство [`triggerTemplate`](api/config/trigger-template.md).

### Пример {#example}

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

## Пользовательское действие при выборе {#custom-action-on-select}

По умолчанию выбор элемента вставляет его в документ как токен. Чтобы выполнить собственный код вместо этого, добавьте колбэк `action` к триггеру. RichText удаляет введённый символ триггера и вызывает `action(item)` с выбранным элементом — токен не вставляется, и вы сами решаете, что добавить.

:::note[Примечание]
`action` имеет приоритет над `showTrigger`. Если задан `action`, значение `showTrigger` игнорируется.
:::

### Добавление эмодзи {#add-emoji}

Триггер `:` может вставлять эмодзи, где каждый элемент содержит пользовательское поле `code`. Используйте `action` вместе с [`triggerTemplate`](api/config/trigger-template.md), чтобы выпадающий список отображал эмодзи, а не просто его метку:

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

### Группировка эмодзи по категориям {#group-emoji-by-categories}

Когда параметр `data` является функцией, вы не ограничены встроенным сопоставлением по полю `label`. Можно выполнять собственную фильтрацию и сохранять заголовки категорий в выпадающем списке. Добавьте элементы-заголовки с полем `label`, но без поля `code`. Функция `data` сначала находит эмодзи, соответствующие запросу, затем возвращает эмодзи вместе с заголовками категорий, в которых остались совпадения:

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

### Добавление командного меню в стиле slash {#add-slash-style-command-menu}

С помощью `action` можно создать командное меню в стиле slash (как `/` в Notion или Slack). Храните название команды в поле `id` каждого элемента, её параметры — в пользовательском поле `config`, и позвольте колбэку выполнять её через [`api.exec`](api/internal/exec.md):

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

## Связанный АПИ {#related-api}

- [`triggers`](api/config/triggers.md)
- [`triggerTemplate`](api/config/trigger-template.md)
- [`insert-token`](api/events/insert-token.md)
- [`show-suggest`](api/events/show-suggest.md)
- [`hide-suggest`](api/events/hide-suggest.md)
