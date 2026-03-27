---
sidebar_label: resize-image
title: Событие resize-image
description: Вы можете узнать о событии resize-image в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# resize-image

### Описание {#description}

@short: Срабатывает при изменении размера изображения

### Использование {#usage}

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **resize-image** может принимать объект со следующими параметрами:

- `id` - идентификатор изображения
- `width` - ширина изображения
- `height` - высота изображения

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
