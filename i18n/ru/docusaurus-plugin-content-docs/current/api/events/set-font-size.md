---
sidebar_label: set-font-size
title: Событие set-font-size
description: Документация по событию set-font-size библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# set-font-size

### Описание {#description}

@short: Срабатывает при смене размера шрифта

### Использование {#usage}

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **set-font-size** принимает объект со следующим параметром:

- `fontSize` — применяемый размер шрифта

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-font-size"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// применить новый размер шрифта
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**История изменений:** Событие добавлено в v2.0
