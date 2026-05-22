---
sidebar_label: insert-link
title: insert-link Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии insert-link. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

- `url` - вставляемый URL

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-link" event
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
