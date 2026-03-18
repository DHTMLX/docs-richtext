---
sidebar_label: undo
title: Событие undo
description: Документация по событию undo библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# undo

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Undo» в menubar/toolbar или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"undo": () => boolean | void;
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
// подписка на событие "undo"
editor.api.on("undo", () => {
    console.log("Undo operation was performed");
});
~~~

**История изменений:** Событие добавлено в v2.0
