---
sidebar_label: insert-image
title: События insert-image
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии insert-image. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# insert-image

### Описание {#description}

@short: Срабатывает при вставке изображения (через панель инструментов, строку меню, вставку из буфера обмена или перетаскивание)

### Использование {#usage}

~~~jsx {}
"insert-image": (IImageContext) => boolean | void;

interface IImageContext {
    id: TID;
    value: string;  // источник изображения: URL сервера, если задан imageUploadUrl, или base64 data URL, если изображение встроено
    width: number;
    height: number;
    // дополнительные свойства из контекста загрузчика, не обязательные для выполнения действия
    name?: string;
    file?: File;
    status?: string;
    selected: (ctx: IImageContext) => void;
    uploaded: (ctx: IImageContext) => void;
}
~~~

:::note[Примечание]
Поле `value` содержит либо внешний URL (если настроен [`imageUploadUrl`](api/config/image-upload-url.md) и загрузка прошла успешно), либо base64 data URL (если `imageUploadUrl` не задан и изображение встраивается на стороне клиента). Обработчики, работающие с источником — например, для перезаписи URL или проверки хоста — должны учитывать оба формата.
:::

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "insert-image"
editor.api.on("insert-image", (obj) => {
    console.log(obj);
    console.log("The image was inserted");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
