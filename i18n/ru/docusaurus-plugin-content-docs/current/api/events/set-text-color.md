---
sidebar_label: set-text-color
title: Событие set-text-color
description: Изучите событие set-text-color в документации библиотеки DHTMLX JavaScript RichText. Найдите руководства для разработчиков, справочники API, примеры кода, живые демонстрации и получите бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# set-text-color

### Описание

@short: Срабатывает при применении цвета текста и/или цвета фона

### Использование

~~~jsx {}
"set-text-color": (ITextColor) => boolean | void;

interface ITextColor {
    color?: string;
    background?: string;
}
~~~

### Параметры

Колбэк для события **set-text-color** получает объект со следующими свойствами:

- `color` - цвет текста
- `background` - цвет фона текста

:::info
Для управления внутренними событиями вы можете ознакомиться с [**Методами Event Bus**](api/overview/event_bus_methods_overview.md)
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
    console.log("Цвет текста и/или цвет фона были обновлены");
});
// установка цвета текста и фона
editor.api.exec("set-text-color", {
   color: "red",
   background: "blue"
});
~~~

**История изменений:** Это событие было добавлено в версии v2.0
