---
sidebar_label: insert-image
title: Событие insert-image
description: Изучите событие insert-image в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# insert-image

### Описание

@short: Срабатывает при вставке изображения

### Использование

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;
    width: number;
    height: number;
    // дополнительные свойства из контекста загрузчика, не обязательные для самого действия
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info
Для работы с внутренними событиями вы можете обратиться к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "insert-image"
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("Изображение было вставлено");
});
~~~

**История изменений:** Это событие было добавлено в версии v2.0
