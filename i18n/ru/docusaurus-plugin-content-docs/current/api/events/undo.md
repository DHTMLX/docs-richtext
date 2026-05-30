---
sidebar_label: undo
title: undo Event
description: Вы можете узнать о событии undo в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# undo

### Описание

@short: Срабатывает при нажатии кнопки «Отменить» в панели меню/тулбаре или через методы Event Bus

### Использование

~~~jsx {}
"undo": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-8}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "undo"
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
