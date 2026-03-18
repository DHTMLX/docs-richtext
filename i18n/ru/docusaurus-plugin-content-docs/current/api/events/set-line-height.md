---
sidebar_label: set-line-height
title: Событие set-line-height
description: Документация по событию set-line-height библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# set-line-height

### Описание {#description}

@short: Срабатывает при смене межстрочного интервала

### Использование {#usage}

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **set-line-height** принимает объект со следующим параметром:

- `lineHeight` — межстрочный интервал

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-line-height"
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// применить новый межстрочный интервал
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**История изменений:** Событие добавлено в v2.0
