---
sidebar_label: undo
title: Событие undo
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии undo. Изучайте руководства для разработчиков и справочник АПИ, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# undo

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Отменить» в строке меню/панели инструментов или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"undo": () => boolean | void;
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
// подписка на событие "undo"
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
