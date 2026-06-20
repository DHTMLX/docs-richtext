---
sidebar_label: set-font-family
title: Событие set-font-family
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии set-font-family. Изучайте руководства для разработчиков и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-font-family

### Описание {#description}

@short: Срабатывает при установке семейства шрифтов

### Использование {#usage}

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события `set-font-family` может принимать объект со следующим параметром:

- `fontFamily` - семейство шрифтов для применения. Доступны следующие шрифты: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

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
// применение нового семейства шрифтов
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**Журнал изменений:** Событие добавлено в v2.0
