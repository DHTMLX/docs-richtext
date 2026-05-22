---
sidebar_label: delete-link
title: delete-link Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии delete-link. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# delete-link

### Описание

@short: Срабатывает при удалении ссылки

### Использование

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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

**Журнал изменений:** Событие добавлено в v2.0
