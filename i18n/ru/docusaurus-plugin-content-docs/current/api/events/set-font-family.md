---
sidebar_label: set-font-family
title: Событие set-font-family
description: Документация по событию set-font-family библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# set-font-family

### Описание {#description}

@short: Срабатывает при смене шрифта

### Использование {#usage}

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **set-font-family** принимает объект со следующим параметром:

- `fontFamily` — применяемый шрифт. Доступные шрифты: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-font-family"
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("The font family was changed");
});
// применить новый шрифт
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
});
~~~

**История изменений:** Событие добавлено в v2.0
