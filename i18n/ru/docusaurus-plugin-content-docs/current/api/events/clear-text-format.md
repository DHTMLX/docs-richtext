---
sidebar_label: clear-text-format
title: Событие clear-text-format
description: Документация по событию clear-text-format библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# clear-text-format

### Описание {#description}

@short: Срабатывает при очистке форматирования текста через menubar/toolbar или методы Event Bus

### Использование {#usage}

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-10}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "clear-text-format"
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// очистка форматирования текста
editor.api.exec("clear-text-format", {});
~~~

**История изменений:** Событие добавлено в v2.0
