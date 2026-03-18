---
sidebar_label: indent
title: Событие indent
description: Документация по событию indent библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# indent

### Описание {#description}

@short: Срабатывает при увеличении отступа блока

### Использование {#usage}

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **indent** принимает объект со следующим параметром:

- `step` — шаг, на который увеличен отступ

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "indent"
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**История изменений:** Событие добавлено в v2.0
