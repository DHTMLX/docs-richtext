---
sidebar_label: subscript
title: subscript Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии subscript. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# subscript

### Описание

@short: Срабатывает при нажатии кнопки "Subscript" в меню/панели инструментов или через методы Event Bus

### Использование

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-10}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "subscript"
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// вызов события "subscript"
editor.api.exec("subscript", {});
~~~

**Журнал изменений:** Событие добавлено в v2.0
