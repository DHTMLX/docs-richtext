---
sidebar_label: resize-image
title: resize-image Event
description: Узнайте о событии resize-image в документации JavaScript-библиотеки DHTMLX RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# resize-image

### Описание

@short: Вызывается при изменении размера изображения

### Использование

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Параметры

Калбэк события **resize-image** принимает объект со следующими параметрами:

- `id` - идентификатор изображения
- `width` - ширина изображения
- `height` - высота изображения

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
// configuration properties
});
// subscribe to the "resize-image" event
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
