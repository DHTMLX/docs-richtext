---
sidebar_label: set-font-family
title: Событие set-font-family
description: Вы можете узнать о событии set-font-family в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-font-family

### Описание {#description}

@short: Срабатывает при установке семейства шрифтов

### Использование {#usage}

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **set-font-family** может принимать объект со следующим параметром:

- `fontFamily` - семейство шрифтов, которое необходимо применить. Доступны следующие шрифты: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
