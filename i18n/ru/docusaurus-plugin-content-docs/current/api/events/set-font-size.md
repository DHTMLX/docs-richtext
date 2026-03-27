---
sidebar_label: set-font-size
title: Событие set-font-size
description: Вы можете узнать о событии set-font-size в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-font-size

### Описание {#description}

@short: Срабатывает при установке размера шрифта

### Использование {#usage}

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **set-font-size** может принимать объект со следующим параметром:

- `fontSize` - размер шрифта, который необходимо применить

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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
