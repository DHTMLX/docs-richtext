---
sidebar_label: align
title: Событие align
description: Документация по событию align библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# align

### Описание {#description}

@short: Срабатывает при изменении выравнивания текста через menubar/toolbar или методы Event Bus

### Использование {#usage}

~~~jsx {}
"align": ({
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **align** принимает объект со следующим параметром:

- `align` — выравнивание текста. Возможные значения: `"left" | "center" | "right" | "justify"`

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-12}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "align"
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// выравнивание текста по левому краю
editor.api.exec("align", {
    align: "left"
});
~~~

**История изменений:** Событие добавлено в v2.0
