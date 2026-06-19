---
sidebar_label: resize-image
title: resize-image Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии resize-image. Изучите руководства разработчика и справочник АПИ, просмотрите примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# resize-image

### Описание {#description}

@short: Срабатывает при изменении размера изображения

### Использование {#usage}

~~~jsx {}
"resize-image": ({ id: number, width: number, height: number }) => boolean | void;
~~~

### Параметры {#parameters}

Калбэк события **resize-image** может принимать объект со следующими параметрами:

- `id` - идентификатор изображения
- `width` - ширина изображения
- `height` - высота изображения

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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

**Журнал изменений:** Событие добавлено в v2.0
