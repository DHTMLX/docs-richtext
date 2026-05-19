---
sidebar_label: clear-text-format
title: clear-text-format Event
description: Вы можете узнать о событии clear-text-format в документации JavaScript-библиотеки DHTMLX RichText. Руководства разработчика и справочник АПИ, примеры кода и живые демо, а также бесплатная 30-дневная ознакомительная версия DHTMLX RichText.
---

# clear-text-format

### Описание

@short: Срабатывает при очистке форматирования текста через меню/панель инструментов или методы Event Bus

### Использование

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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

**Список изменений:** Событие добавлено в v2.0
