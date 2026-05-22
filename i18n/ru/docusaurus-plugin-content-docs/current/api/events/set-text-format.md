---
sidebar_label: set-text-format
title: set-text-format Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии set-text-format. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Параметры

Колбэк события **set-text-format** принимает объект со следующими параметрами:

- `bold` - формат жирного текста
- `italic` - формат курсивного текста
- `strike` - формат зачёркнутого текста
- `underline` - формат подчёркнутого текста

### Пример

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

**Журнал изменений:** Событие добавлено в версии v2.0
