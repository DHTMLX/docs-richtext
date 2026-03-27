---
sidebar_label: set-text-format
title: Событие set-text-format
description: Вы можете узнать о событии set-text-format в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-text-format

### Описание {#description}

@short: Срабатывает при установке формата текста

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
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Параметры {#parameters}

Колбэк события **set-text-format** может принимать объект со следующими параметрами:

- `bold` - жирный формат текста
- `italic` - курсивный формат текста
- `strike` - зачёркнутый формат текста
- `underline` - подчёркнутый формат текста

### Пример {#example}

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-format" event
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// apply the "italic" and bold text format
editor.api.exec("set-text-format", {
    italic: true,
    bold: true
});
~~~

**История изменений:** Событие добавлено в v2.0
