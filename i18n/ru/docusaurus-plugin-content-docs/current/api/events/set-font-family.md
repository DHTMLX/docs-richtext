---
sidebar_label: set-font-family
title: set-font-family Event
description: Вы можете узнать о событии set-font-family в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-font-family

### Описание

@short: Срабатывает при установке гарнитуры шрифта

### Использование

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Параметры

Колбэк события **set-font-family** может принимать объект со следующим параметром:

- `fontFamily` - гарнитура шрифта, которая будет применена. Доступны следующие шрифты: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // параметры конфигурации
});
// подписка на событие "set-font-family"
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// применить новую гарнитуру шрифта
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**История изменений:** Событие добавлено в v2.0
