---
sidebar_label: update-link
title: Событие update-link
description: Вы можете узнать о событии update-link в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# update-link

### Описание

@short: Срабатывает при обновлении ссылки

### Использование

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Параметры

Колбэк для события **update-link** получает объект с следующими свойствами:

- `id` - идентификатор ссылки
- `url` - обновлённый URL

:::info
Для управления внутренними событиями вы можете обратиться к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "update-link"
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("Была обновлена следующая ссылка: " + obj.url);
});
~~~

**История изменений:** Событие было добавлено в версии v2.0
