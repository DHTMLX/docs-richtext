---
sidebar_label: clear-text-format
title: Событие clear-text-format
description: В документации DHTMLX JavaScript RichText вы можете узнать о событии clear-text-format. Изучайте руководства разработчика и справочник АПИ, экспериментируйте с примерами кода и живыми демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# clear-text-format

### Описание

@short: Срабатывает при очистке форматирования текста через меню/панель инструментов или методы Event Bus

### Использование

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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
