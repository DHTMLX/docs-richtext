---
sidebar_label: align
title: align Event
description: Вы можете узнать о событии align в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# align

### Описание

@short: Срабатывает при изменении выравнивания текста через menubar/toolbar или методы Event Bus

### Использование

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Параметры

Колбэк события **align** может принимать объект со следующим параметром:

- `align` - выравнивание текста. Допустимые значения: `"left" | "center" | "right" | "justify"`

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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
