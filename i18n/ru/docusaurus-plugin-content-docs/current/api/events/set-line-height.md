---
sidebar_label: set-line-height
title: set-line-height Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии set-line-height. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-line-height

### Описание

@short: Срабатывает при установке межстрочного интервала

### Использование

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Параметры

Колбэк события **set-line-height** принимает объект со следующим параметром:

- `lineHeight` - межстрочный интервал

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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

**Журнал изменений:** Событие добавлено в v2.0
