---
sidebar_label: update-link
title: Событие update-link
description: Вы можете узнать о событии update-link в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# update-link

### Описание {#description}

@short: Срабатывает при обновлении ссылки

### Использование {#usage}

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **update-link** может принимать объект со следующими параметрами:

- `id` - идентификатор ссылки
- `url` - изменённый URL

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
