---
sidebar_label: delete-link
title: Событие delete-link
description: Документация по событию delete-link библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# delete-link

### Описание {#description}

@short: Срабатывает при удалении ссылки

### Использование {#usage}

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-8}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "delete-link"
editor.api.on("delete-link", () => {
    console.log("The link was deleted");
});
~~~

**История изменений:** Событие добавлено в v2.0
