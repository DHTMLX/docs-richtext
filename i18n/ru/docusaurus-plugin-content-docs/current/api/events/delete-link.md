---
sidebar_label: delete-link
title: delete-link Event
description: Вы можете узнать о событии delete-link в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# delete-link

### Описание

@short: Срабатывает при удалении ссылки

### Использование

~~~jsx {}
"delete-link": () => boolean | void;
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
// подписка на событие "delete-link"
editor.api.on("delete-link", () => {
    console.log("The link was deleted");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
