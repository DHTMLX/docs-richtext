---
sidebar_label: print
title: Событие print
description: Вы можете узнать о событии print в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# print

### Описание {#description}

@short: Срабатывает при печати документа

### Использование {#usage}

~~~jsx {}
"print": () => boolean | void;
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
// subscribe to the "print" event
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**История изменений:** Событие добавлено в v2.0
