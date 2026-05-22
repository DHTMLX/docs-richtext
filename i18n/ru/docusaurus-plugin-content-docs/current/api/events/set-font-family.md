---
sidebar_label: set-font-family
title: set-font-family Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии set-font-family. Изучите руководства разработчика и справочник АПИ, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-font-family

### Описание

@short: Срабатывает при установке семейства шрифтов

### Использование

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Параметры

Колбэк события **set-font-family** может принимать объект со следующим параметром:

- `fontFamily` - семейство шрифтов для применения. Доступны следующие шрифты: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-family" event
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// apply new font family
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**Журнал изменений:** Событие добавлено в v2.0
