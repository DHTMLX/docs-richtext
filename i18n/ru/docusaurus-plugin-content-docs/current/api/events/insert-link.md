---
sidebar_label: insert-link
title: insert-link Event
description: Вы можете узнать о событии insert-link в документации библиотеки DHTMLX JavaScript RichText. Изучите руководства разработчика и справочник АПИ, попробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# insert-link

### Описание

@short: Срабатывает при вставке ссылки

### Использование

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Параметры

Калбэк события **update-link** может принимать объект со следующим параметром:

- `url` - url-адрес для вставки

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
