---
sidebar_label: paste
title: paste Event
description: Вы можете узнать о событии paste в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# paste

### Описание

@short: Срабатывает при вставке содержимого

### Использование

~~~jsx {}
"paste": () => boolean | void;
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
// подписка на событие "paste"
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
