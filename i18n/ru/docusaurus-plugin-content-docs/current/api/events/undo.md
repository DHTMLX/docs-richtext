---
sidebar_label: undo
title: Событие undo
description: Вы можете узнать о событии undo в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# undo

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Undo» в строке меню/панели инструментов или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
