---
sidebar_label: superscript
title: superscript Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии superscript. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# superscript

### Описание

@short: Срабатывает при нажатии кнопки "Superscript" в строке меню/панели инструментов или через методы Event Bus

### Использование

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "superscript" event
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// trigger the "superscript" event
editor.api.exec("superscript", {});
~~~

**Журнал изменений:** Событие добавлено в v2.0
