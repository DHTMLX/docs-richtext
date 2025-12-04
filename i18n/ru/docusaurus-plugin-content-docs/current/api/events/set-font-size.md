---
sidebar_label: set-font-size
title: Событие set-font-size
description: Изучите событие set-font-size в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками API, попробуйте демо и скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# set-font-size

### Описание

@short: Срабатывает при установке размера шрифта

### Использование

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Параметры

Колбэк для события **set-font-size** получает объект с таким параметром:

- `fontSize` - размер шрифта, который нужно применить

:::info
Для управления внутренними событиями вы можете обратиться к [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-font-size"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("Размер шрифта был изменён");
});
// установка нового размера шрифта
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**История изменений:** Это событие было добавлено в версии v2.0
