---
sidebar_label: copy
title: copy Event
description: Вы можете узнать о событии copy в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# copy

### Описание

@short: Срабатывает при копировании выделенного текста

### Использование

~~~jsx {}
"copy": () => boolean | void;
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
// подписка на событие "copy"
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
