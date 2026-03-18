---
sidebar_label: paste
title: Событие paste
description: Документация по событию paste библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# paste

### Описание {#description}

@short: Срабатывает при вставке содержимого

### Использование {#usage}

~~~jsx {}
"paste": () => boolean | void;
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
// подписка на событие "paste"
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**История изменений:** Событие добавлено в v2.0
