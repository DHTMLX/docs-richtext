---
sidebar_label: set-text-format
title: Событие set-text-format
description: Документация по событию set-text-format библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# set-text-format

### Описание {#description}

@short: Срабатывает при смене форматирования текста

### Использование {#usage}

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Параметры {#parameters}

Колбэк события **set-text-format** принимает объект со следующими параметрами:

- `bold` — жирное начертание
- `italic` — курсивное начертание
- `strike` — зачёркнутый текст
- `underline` — подчёркнутый текст

### Пример {#example}

~~~jsx {5-14}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-text-format"
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// применить курсив и жирное начертание
editor.api.exec("set-text-format", {
    italic: true,
    bold: true
});
~~~

**История изменений:** Событие добавлено в v2.0
