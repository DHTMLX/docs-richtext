---
sidebar_label: set-text-color
title: set-text-color Event
description: Вы можете узнать о событии set-text-color в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-text-color

### Описание

@short: Срабатывает при установке цвета текста и/или цвета фона текста

### Использование

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Параметры

Колбэк события **set-text-color** может принимать объект со следующими параметрами:

- `color` - цвет текста
- `background` - цвет фона текста

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-14}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-text-color" event
editor.api.on("set-text-color", (obj) => {
    console.log(obj);
    console.log("The text color and/or background text color were changed");
});
// apply text color and background
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
