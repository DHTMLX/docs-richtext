---
sidebar_label: print
title: Событие print
description: Документация по событию print библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# print

### Описание {#description}

@short: Срабатывает при печати документа

### Использование {#usage}

~~~jsx {}
"print": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
