---
sidebar_label: print
title: print Event
description: Вы можете узнать о событии print в документации библиотеки DHTMLX JavaScript RichText. Изучите руководства разработчика и справочник АПИ, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
// инициализация RichText
const editor = new richtext.Richtext("#root", {
// свойства конфигурации
});
// подписка на событие "print"
editor.api.on("print", () => {
    console.log("The document is printing");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
