---
sidebar_label: set-line-height
title: set-line-height Event
description: Вы можете узнать о событии set-line-height в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами разработчика и справочником АПИ, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-line-height

### Описание

@short: Срабатывает при установке межстрочного интервала

### Использование

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Параметры

Колбэк события **set-line-height** может принимать объект со следующим параметром:

- `lineHeight` - межстрочный интервал

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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
// применение нового межстрочного интервала
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
