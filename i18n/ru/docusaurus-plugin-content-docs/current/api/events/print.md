---
sidebar_label: print
title: Событие print
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии print. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# print

### Описание

@short: Срабатывает при печати документа

### Использование

~~~jsx {}
"print": () => boolean | void;
~~~

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration properties
});
// subscribe to the "print" event
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**Change log:** Событие добавлено в v2.0
