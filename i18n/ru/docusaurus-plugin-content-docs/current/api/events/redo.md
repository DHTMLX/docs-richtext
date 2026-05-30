---
sidebar_label: redo
title: redo Event
description: Вы можете узнать о событии redo в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# redo

### Описание

@short: Срабатывает при нажатии кнопки "Redo" в меню/панели инструментов или через методы Event Bus

### Использование

~~~jsx {}
"redo": () => boolean | void;
~~~

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-8}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "redo"
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
