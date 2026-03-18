---
sidebar_label: insert-line
title: Событие insert-line
description: Документация по событию insert-line библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# insert-line

### Описание {#description}

@short: Срабатывает при вставке горизонтальной линии

### Использование {#usage}

~~~jsx {}
"insert-line": () => boolean | void;
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
// подписка на событие "insert-line"
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**История изменений:** Событие добавлено в v2.0
