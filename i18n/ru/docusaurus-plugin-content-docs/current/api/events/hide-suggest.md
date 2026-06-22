---
sidebar_label: hide-suggest
title: hide-suggest Event
description: Вы можете узнать о событии hide-suggest в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# hide-suggest

### Описание {#description}

@short: Срабатывает при закрытии выпадающего списка подсказок

Событие срабатывает в любом из следующих случаев:

- пользователь выбирает элемент из выпадающего списка
- пользователь нажимает `Escape`
- курсор выходит из контекста триггера (например, при нажатии `Backspace` до символа триггера)
- текущий запрос не возвращает совпадений

### Использование {#usage}

~~~jsx {}
"hide-suggest": () => boolean | void;
~~~

### Параметры {#parameters}

Калбэк события `hide-suggest` не принимает никаких параметров.

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md).
:::

### Пример {#example}

~~~jsx {5-7}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "hide-suggest"
editor.api.on("hide-suggest", () => {
    console.log("Suggestion dropdown closed");
});
~~~

**Журнал изменений:** Событие добавлено в v2.1

**Связанный пример:** [RichText. Упоминания, теги и асинхронный поиск](https://snippet.dhtmlx.com/nfvvfize?tag=richtext)

**Связанные статьи:** [Упоминания и теги](guides/mentions_and_tags.md)
