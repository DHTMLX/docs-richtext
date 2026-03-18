---
sidebar_label: set-text-style
title: Событие set-text-style
description: Документация по событию set-text-style библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# set-text-style

### Описание {#description}

@short: Срабатывает при смене стиля текста

### Использование {#usage}

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Параметры {#parameters}

Колбэк события **set-text-style** принимает объект со следующим параметром:

- `tag` — стиль текста

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-text-style"
editor.api.on("set-text-style", (obj) => {
    console.log(obj.tag);
    console.log("The text style was changed");
});
// применить новый стиль текста
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**История изменений:** Событие добавлено в v2.0
