---
sidebar_label: copy
title: Событие copy
description: Документация по событию copy библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# copy

### Описание {#description}

@short: Срабатывает при копировании выделенного текста

### Использование {#usage}

~~~jsx {}
"copy": () => boolean | void;
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
// подписка на событие "copy"
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**История изменений:** Событие добавлено в v2.0
