---
sidebar_label: insert-line
title: Событие insert-line
description: Узнайте подробности о событии insert-line в документации библиотеки DHTMLX JavaScript RichText. Изучите руководства для разработчиков, справочники по API, попробуйте примеры и живые демонстрации, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# insert-line

### Описание

@short: Срабатывает при вставке горизонтальной линии

### Использование

~~~jsx {}
"insert-line": () => boolean | void;
~~~

:::info
Для работы с внутренними событиями можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-8}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "insert-line"
editor.api.on("insert-line", () => {
    console.log("Горизонтальная линия была вставлена");
});
~~~

**История изменений:** Это событие было добавлено в версии v2.0
