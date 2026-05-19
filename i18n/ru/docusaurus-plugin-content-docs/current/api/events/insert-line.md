---
sidebar_label: insert-line
title: insert-line Event
description: В документации JavaScript-библиотеки DHTMLX RichText вы можете узнать о событии insert-line. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-line" event
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**Журнал изменений:** Событие добавлено в версии v2.0
