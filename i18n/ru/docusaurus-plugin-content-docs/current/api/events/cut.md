---
sidebar_label: cut
title: Событие cut
description: Документация по событию cut библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# cut

### Описание {#description}

@short: Срабатывает при вырезании выделенного текста

### Использование {#usage}

~~~jsx {}
"cut": () => boolean | void;
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
// подписка на событие "cut"
editor.api.on("cut", () => {
    console.log("Selected text was cut");
});
~~~

**История изменений:** Событие добавлено в v2.0
