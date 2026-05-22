---
sidebar_label: subscript
title: subscript Event
description: Вы можете узнать о событии subscript в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# subscript

### Описание

@short: Срабатывает при нажатии кнопки "Subscript" в строке меню/панели инструментов или через методы Event Bus

### Использование

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "subscript" event
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// trigger the "subscript" event
editor.api.exec("subscript", {});
~~~

**Журнал изменений:** Событие добавлено в версии v2.0
