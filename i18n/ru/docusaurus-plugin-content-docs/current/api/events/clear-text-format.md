---
sidebar_label: clear-text-format
title: Событие clear-text-format
description: Вы можете узнать о событии clear-text-format в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# clear-text-format

### Описание {#description}

@short: Срабатывает при очистке форматирования текста через меню/панель инструментов или методы Event Bus

### Использование {#usage}

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "clear-text-format" event
editor.api.on("clear-text-format", () => {
    console.log("Text format was cleared");
});
// clear text format
editor.api.exec("clear-text-format", {});
~~~

**История изменений:** Событие добавлено в v2.0
