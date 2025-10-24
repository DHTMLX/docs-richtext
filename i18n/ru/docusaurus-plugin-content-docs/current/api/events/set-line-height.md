---
sidebar_label: set-line-height
title: Событие set-line-height
description: Вы можете узнать о событии set-line-height в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# set-line-height

### Описание

@short: Срабатывает всякий раз при установке высоты строки

### Использование

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Параметры

Колбэк для события **set-line-height** получает объект с таким параметром:

- `lineHeight` - значение устанавливаемой высоты строки

:::info
Для управления внутренними событиями можно обратиться к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// отслеживание события "set-line-height"
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("Высота строки была изменена");
});
// установка новой высоты строки
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Изменения:** Событие было добавлено в версии v2.0
