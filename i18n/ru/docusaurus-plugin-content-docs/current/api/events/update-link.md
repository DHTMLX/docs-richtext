---
sidebar_label: update-link
title: Событие update-link
description: Документация по событию update-link библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# update-link

### Описание {#description}

@short: Срабатывает при обновлении ссылки

### Использование {#usage}

~~~jsx {}
"update-link": ({ id: number, url: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **update-link** принимает объект со следующими параметрами:

- `id` — идентификатор ссылки
- `url` — изменённый URL

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
