---
sidebar_label: insert-line
title: Событие insert-line
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии insert-line. Изучайте руководства для разработчиков и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "insert-line"
editor.api.on("insert-line", () => {
    console.log("The horizontal line was inserted");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
