---
sidebar_label: set-font-family
title: Событие set-font-family
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии set-font-family. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# set-font-family

### Описание

@short: Срабатывает при установке семейства шрифтов

### Использование

~~~jsx {}
"set-font-family": ({ fontFamily: string }) => boolean | void;
~~~

### Параметры

Callback для события **set-font-family** получает объект с следующим параметром:

- `fontFamily` - семейство шрифтов, которое необходимо применить. Доступные варианты: `"Roboto" | "Arial" | "Georgia" | "Tahoma" | "Times New Roman" | "Verdana"`

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-font-family"
editor.api.on("set-font-family", (obj) => {
    console.log(obj.fontFamily);
    console.log("Семейство шрифтов было изменено");
});
// установка нового семейства шрифтов
editor.api.exec("set-font-family", {
    fontFamily: "Roboto"
}); 
~~~

**История изменений:** Это событие было добавлено в версии 2.0
