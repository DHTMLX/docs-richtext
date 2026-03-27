---
sidebar_label: subscript
title: Событие subscript
description: Вы можете узнать о событии subscript в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# subscript

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Subscript» в строке меню/панели инструментов или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
