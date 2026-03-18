---
sidebar_label: redo
title: Событие redo
description: Документация по событию redo библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# redo

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Redo» в menubar/toolbar или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"redo": () => boolean | void;
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
// подписка на событие "redo"
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**История изменений:** Событие добавлено в v2.0
