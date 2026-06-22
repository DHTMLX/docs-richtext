---
sidebar_label: align
title: Событие align
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии align. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# align

### Описание {#description}

@short: Срабатывает при изменении выравнивания текста через меню/панель инструментов или методы Event Bus

### Использование {#usage}

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события `align` может принимать объект со следующим параметром:

- `align` - выравнивание текста. Можно указать одно из следующих значений: `"left" | "center" | "right" | "justify"`

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
