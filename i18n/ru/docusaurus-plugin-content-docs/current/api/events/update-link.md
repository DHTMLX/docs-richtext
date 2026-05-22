---
sidebar_label: update-link
title: update-link Event
description: Вы можете узнать о событии update-link в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, и скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# update-link

### Описание

@short: Срабатывает при обновлении ссылки

### Использование

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Параметры

Калбэк события **update-link** может принимать объект со следующими параметрами:

- `id` - идентификатор ссылки
- `url` - изменённый url

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "update-link" event
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
