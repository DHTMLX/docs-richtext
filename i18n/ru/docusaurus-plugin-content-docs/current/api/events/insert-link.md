---
sidebar_label: insert-link
title: Событие insert-link
description: Изучите событие insert-link в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# insert-link

### Описание

@short: Срабатывает при вставке ссылки

### Использование

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Параметры

Обратный вызов для события **update-link** получает объект с этим параметром:

- `url` - вставляемый URL

:::info
Для управления внутренними событиями вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "insert-link"
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("Вставлена следующая ссылка: " + obj.url);
});
~~~

**История изменений:** Это событие было добавлено в версии v2.0
