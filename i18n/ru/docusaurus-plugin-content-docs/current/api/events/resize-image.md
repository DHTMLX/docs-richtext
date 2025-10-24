---
sidebar_label: resize-image
title: Событие resize-image
description: Вы можете узнать о событии resize-image в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# resize-image

### Описание

@short: Срабатывает при изменении размера изображения

### Использование

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Параметры

Объект, передаваемый в колбэк события **resize-image**, содержит следующие свойства:

- `id` - уникальный идентификатор изображения
- `width` - новая ширина изображения
- `height` - новая высота изображения

:::info
Для работы с внутренними событиями вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
// свойства конфигурации
});
// подписка на событие "resize-image"
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("Изображение было изменено в размере")
});
~~~

**История изменений:** Событие было добавлено в версии v2.0
