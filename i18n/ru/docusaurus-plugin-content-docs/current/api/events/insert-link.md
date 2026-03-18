---
sidebar_label: insert-link
title: Событие insert-link
description: Документация по событию insert-link библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# insert-link

### Описание {#description}

@short: Срабатывает при вставке ссылки

### Использование {#usage}

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **insert-link** принимает объект со следующим параметром:

- `url` — вставляемый URL

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
