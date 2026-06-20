---
sidebar_label: update-link
title: update-link Event
description: Вы можете узнать о событии update-link в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# update-link

### Описание {#description}

@short: Срабатывает при обновлении ссылки

### Использование {#usage}

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события `update-link` может принимать объект со следующими параметрами:

- `id` - идентификатор ссылки
- `url` - изменённый url

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "update-link"
editor.api.on("update-link", (obj) => {
    console.log(obj);
    console.log("The following link was updated:" + obj.url);
});
~~~

**История изменений:** Событие добавлено в v2.0
