---
sidebar_label: insert-line
title: Событие insert-line
description: Вы можете узнать о событии insert-line в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# insert-line

### Описание {#description}

@short: Срабатывает при вставке горизонтальной линии

### Использование {#usage}

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
