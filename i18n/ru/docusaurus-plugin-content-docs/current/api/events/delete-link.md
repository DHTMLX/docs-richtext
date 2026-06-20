---
sidebar_label: delete-link
title: delete-link Event
description: Вы можете узнать о событии delete-link в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# delete-link

### Описание {#description}

@short: Вызывается при удалении ссылки

### Использование {#usage}

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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
