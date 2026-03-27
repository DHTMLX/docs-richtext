---
sidebar_label: redo
title: Событие redo
description: Вы можете узнать о событии redo в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# redo

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Redo» в строке меню/панели инструментов или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"redo": () => boolean | void;
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
// subscribe to the "redo" event
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**История изменений:** Событие добавлено в v2.0
