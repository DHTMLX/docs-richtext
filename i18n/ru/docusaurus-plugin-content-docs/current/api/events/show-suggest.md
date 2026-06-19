---
sidebar_label: show-suggest
title: Событие show-suggest
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии show-suggest. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# show-suggest

### Описание {#description}

@short: Срабатывает при открытии выпадающего списка подсказок для настроенного триггера

Событие `show-suggest` срабатывает после того, как RichText формирует непустой список элементов для текущего триггера, непосредственно перед открытием выпадающего списка. Перехватите событие, чтобы скорректировать элементы, переместить выпадающий список или отменить его отображение.

### Использование {#usage}

~~~jsx {}
"show-suggest": ({
    trigger: string,
    query: string,
    items: Array<{
        id?: string | number,
        label?: string,
        url?: string,
        // ...любые пользовательские поля из источника данных триггера
    }>,
    pos: DOMRect
}) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события `show-suggest` получает объект со следующими полями:

- `trigger` - символ триггера, открывший выпадающий список
- `query` - текст, введённый после символа триггера (используется для фильтрации `items`)
- `items` - сформированный (и уже отфильтрованный) список элементов подсказок. Каждый элемент соответствует [форме элемента подсказки](api/config/triggers.md#suggestion-item-fields): необязательные поля `id`, `label` и `url`, а также любые пользовательские поля (например, `image` или `name`), используемые [`triggerTemplate`](api/config/trigger-template.md)
- `pos` - объект `DOMRect`, описывающий положение курсора; используется для размещения выпадающего списка на экране

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md).
:::

### Пример {#example}

~~~jsx {6-11}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    triggers: [{ trigger: "@", data: people }]
    // другие свойства конфигурации
});
// переопределение списка подсказок перед открытием выпадающего списка
editor.api.intercept("show-suggest", (state) => {
    if (state.trigger === "@" && state.query === "") {
        return { ...state, items: state.items.slice(0, 5) };
    }
});
~~~

**Журнал изменений:** Событие добавлено в v2.1

**Связанные статьи:** [Упоминания и теги](guides/mentions_and_tags.md)
