---
sidebar_label: redo
title: Событие redo
description: В документации по JavaScript-библиотеке DHTMLX RichText вы можете узнать о событии redo. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# redo

### Описание

@short: Срабатывает при нажатии кнопки "Redo" в меню/тулбаре или через методы Event Bus

### Использование

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "redo" event
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**Список изменений:** Событие добавлено в v2.0
