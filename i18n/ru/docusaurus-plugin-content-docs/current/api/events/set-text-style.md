---
sidebar_label: set-text-style
title: Событие set-text-style
description: Изучите событие set-text-style в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# set-text-style

### Описание

@short: Срабатывает при применении стиля текста

### Использование

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Параметры

Обратный вызов для события **set-text-style** получает объект со следующим свойством:

- `tag` - указывает применяемый стиль текста

:::info
Для управления внутренними событиями вы можете обратиться к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// отслеживание события "set-text-style"
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("Стиль текста был обновлен");
});
// изменение стиля текста
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**История изменений:** Это событие было добавлено в версии v2.0
