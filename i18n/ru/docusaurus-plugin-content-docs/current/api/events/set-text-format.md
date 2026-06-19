---
sidebar_label: set-text-format
title: События set-text-format
description: Вы можете узнать о событии set-text-format в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами разработчика и справочником АПИ, изучите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Параметры {#parameters}

Колбэк события **set-text-format** может принимать объект со следующими параметрами:

- `bold` — формат жирного текста
- `italic` — формат курсивного текста
- `strike` — формат зачёркнутого текста
- `underline` — формат подчёркнутого текста

### Пример {#example}

~~~jsx {5-14}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // параметры конфигурации
});
// подписка на событие "set-text-format"
editor.api.on("set-text-format", (obj) => {
    console.log(obj);
    console.log("The text format was changed");
});
// применение форматов "italic" и bold
editor.api.exec("set-text-format", {
    italic: true, 
    bold: true
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
