---
sidebar_label: set-text-color
title: set-text-color Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии set-text-color. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

Калбэк события **set-text-color** может принимать объект со следующими параметрами:

- `color` - цвет текста
- `background` - цвет фона текста

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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
// применение цвета текста и фона
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**Список изменений:** Событие добавлено в v2.0
