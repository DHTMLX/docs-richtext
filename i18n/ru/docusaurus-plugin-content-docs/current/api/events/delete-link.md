---
sidebar_label: delete-link
title: Событие delete-link
description: Вы можете узнать о событии delete-link в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# delete-link

### Описание {#description}

@short: Срабатывает при удалении ссылки

### Использование {#usage}

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "delete-link" event
editor.api.on("delete-link", () => {
    console.log("The link was deleted");
});
~~~

**История изменений:** Событие добавлено в v2.0
