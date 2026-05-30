---
sidebar_label: insert-image
title: insert-image Event
description: Вы можете узнать о событии insert-image в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
    // дополнительные свойства из контекста загрузчика, не обязательны для выполнения действия
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::info[Примечание]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // параметры конфигурации
});
// подписка на событие "insert-image"
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
