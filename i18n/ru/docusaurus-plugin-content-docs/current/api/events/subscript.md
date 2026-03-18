---
sidebar_label: subscript
title: Событие subscript
description: Документация по событию subscript библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# subscript

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Subscript» в menubar/toolbar или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-10}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "subscript"
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// вызвать событие "subscript"
editor.api.exec("subscript", {});
~~~

**История изменений:** Событие добавлено в v2.0
