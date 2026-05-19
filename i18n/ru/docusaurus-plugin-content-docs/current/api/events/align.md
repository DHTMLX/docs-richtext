---
sidebar_label: align
title: align Event
description: Вы можете узнать о событии align в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# align

### Description

@short: Срабатывает при изменении выравнивания текста через строку меню/панель инструментов или методы Event Bus

### Usage

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Parameters

Калбэк события **align** может принимать объект со следующим параметром:

- `align` - выравнивание текста. Можно указать одно из следующих значений: `"left" | "center" | "right" | "justify"`

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-12}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "align" event
editor.api.on("align", (obj) => {
    console.log(`Align to: ${obj.align}`);
});
// align the text to the left
editor.api.exec("align", {
    align: "left"
}); 
~~~

**Change log:** Событие добавлено в v2.0
