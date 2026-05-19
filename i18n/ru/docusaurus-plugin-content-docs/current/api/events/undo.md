---
sidebar_label: undo
title: Событие undo
description: В документации JavaScript-библиотеки DHTMLX RichText вы можете узнать о событии undo. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# undo

### Описание

@short: Срабатывает при нажатии кнопки "Undo" на панели меню/инструментов или через методы Event Bus

### Использование

~~~jsx {}
"undo": () => boolean | void;
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
// subscribe to the "undo" event
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**История изменений:** Событие добавлено в версии v2.0
