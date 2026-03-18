---
sidebar_label: resize-image
title: Событие resize-image
description: Документация по событию resize-image библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# resize-image

### Описание {#description}

@short: Срабатывает при изменении размера изображения

### Использование {#usage}

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **resize-image** принимает объект со следующими параметрами:

- `id` — идентификатор изображения
- `width` — ширина изображения
- `height` — высота изображения

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
// свойства конфигурации
});
// подписка на событие "resize-image"
editor.api.on("resize-image", (obj) => {
    console.log(obj);
    console.log("The image was resized")
});
~~~

**История изменений:** Событие добавлено в v2.0
