---
sidebar_label: print
title: Событие print
description: В документации DHTMLX JavaScript RichText вы можете узнать о событии print. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
// инициализация RichText
const editor = new richtext.Richtext("#root", {
// свойства конфигурации
});
// подписка на событие "print"
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**История изменений:** Событие добавлено в v2.0
