---
sidebar_label: set-text-format
title: Событие set-text-format
description: Вы можете узнать о событии set-text-format в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# set-text-format

### Описание

@short: Срабатывает при применении форматирования текста

### Использование

~~~jsx {}
"set-text-format": (ITextFormat) => boolean | void;

interface ITextFormat {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    underline?: boolean;
}
~~~

:::info
Для управления внутренними событиями вы можете обратиться к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Параметры

Колбэк для события **set-text-format** получает объект с следующими необязательными свойствами:

- `bold` - указывает на применение полужирного форматирования текста
- `italic` - указывает на применение курсивного форматирования текста
- `strike` - указывает на применение зачёркнутого форматирования текста
- `underline` - указывает на применение подчёркнутого форматирования текста

### Пример

~~~jsx {5-14}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-text-format"
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("Формат текста был изменён");
});
// применение курсивного и полужирного форматирования к тексту
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**История изменений:** Это событие было добавлено в версии 2.0
