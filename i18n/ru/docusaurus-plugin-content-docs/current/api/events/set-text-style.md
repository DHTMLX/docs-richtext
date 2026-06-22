---
sidebar_label: set-text-style
title: События set-text-style
description: Вы можете узнать о событии set-text-style в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами разработчика и справочником АПИ, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-text-style

### Описание {#description}

@short: Срабатывает при установке стиля текста

### Использование {#usage}

~~~jsx {}
"set-text-style": ({ tag: TBlockType }) => boolean | void;

type TBlockType = "p" | "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
~~~

### Параметры {#parameters}

Колбэк события `set-text-style` может принимать объект со следующими параметрами:

- `tag` - стиль текста

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
// применение нового стиля текста
editor.api.exec("set-text-style", {
    tag: "blockquote"
});
~~~

**История изменений:** Событие добавлено в v2.0
