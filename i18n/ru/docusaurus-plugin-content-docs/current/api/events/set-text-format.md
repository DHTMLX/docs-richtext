---
sidebar_label: set-text-format
title: set-text-format Event
description: В документации библиотеки DHTMLX JavaScript RichText можно узнать о событии set-text-format. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-text-format

### Описание

@short: Срабатывает при установке формата текста

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

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Параметры

Калбэк события **set-text-format** может принимать объект со следующими параметрами:

- `bold` - формат жирного текста
- `italic` - формат курсивного текста
- `strike` - формат зачёркнутого текста
- `underline` - формат подчёркнутого текста

### Пример

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
// применить формат "italic" и bold
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
