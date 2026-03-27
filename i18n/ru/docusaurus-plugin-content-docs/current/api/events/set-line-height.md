---
sidebar_label: set-line-height
title: Событие set-line-height
description: Вы можете узнать о событии set-line-height в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-line-height

### Описание {#description}

@short: Срабатывает при установке межстрочного интервала

### Использование {#usage}

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **set-line-height** может принимать объект со следующим параметром:

- `lineHeight` - межстрочный интервал

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-line-height" event
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// apply a new line height
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**История изменений:** Событие добавлено в v2.0
