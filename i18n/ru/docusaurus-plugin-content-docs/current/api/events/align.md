---
sidebar_label: align
title: Событие align
description: Изучите событие align в документации по библиотеке DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# align

### Описание

@short: Срабатывает при каждом обновлении выравнивания текста с помощью menubar/toolbar или методов Event Bus.

### Использование

~~~jsx {}
"align": ({ 
    align: "left" | "center" | "right" | "justify"
}) => boolean | void;
~~~

### Параметры

В callback для события **align** передается объект со следующим свойством:

- `align` - задает выравнивание текста, может принимать одно из значений: `"left" | "center" | "right" | "justify"`

:::info
Внутренние события можно обрабатывать с помощью [**методов Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-12}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "align"
editor.api.on("align", (obj) => {
    console.log(`Выравнивание: ${obj.align}`);
});
// установка выравнивания текста влево
editor.api.exec("align", {
    align: "left"
}); 
~~~

**Изменения:** Это событие было добавлено в версии 2.0
