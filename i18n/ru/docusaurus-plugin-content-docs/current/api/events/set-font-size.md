---
sidebar_label: set-font-size
title: set-font-size Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии set-font-size. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-font-size

### Описание

@short: Вызывается при установке размера шрифта

### Использование

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Параметры

Калбэк события **set-font-size** может принимать объект со следующим параметром:

- `fontSize` - размер шрифта, который будет применён

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// apply new font size
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**История изменений:** Событие добавлено в v2.0
