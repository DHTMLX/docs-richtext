---
sidebar_label: insert-line
title: insert-line Event
description: В документации DHTMLX JavaScript RichText вы можете узнать о событии insert-line. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# insert-line

### Описание

@short: Срабатывает при вставке горизонтальной линии

### Использование

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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

**Список изменений:** Событие добавлено в v2.0
