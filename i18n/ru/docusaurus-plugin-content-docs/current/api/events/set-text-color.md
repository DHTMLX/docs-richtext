---
sidebar_label: set-text-color
title: Событие set-text-color
description: Документация по событию set-text-color библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# set-text-color

### Описание {#description}

@short: Срабатывает при смене цвета текста и/или цвета фона текста

### Использование {#usage}

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Параметры {#parameters}

Колбэк события **set-text-color** принимает объект со следующими параметрами:

- `color` — цвет текста
- `background` — цвет фона текста

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-14}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-text-color"
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("The text color and/or background text color were changed");
});
// применить цвет текста и фона
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**История изменений:** Событие добавлено в v2.0
