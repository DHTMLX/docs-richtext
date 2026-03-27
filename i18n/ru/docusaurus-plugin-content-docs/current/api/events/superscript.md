---
sidebar_label: superscript
title: Событие superscript
description: Вы можете узнать о событии superscript в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# superscript

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Superscript» в строке меню/панели инструментов или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
