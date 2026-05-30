---
sidebar_label: export
title: export Event
description: Вы можете узнать о событии export в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, попробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# export

### Описание

@short: Срабатывает после нажатия на пункт «Экспорт» в панели меню или через методы Event Bus

### Использование

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### Параметры

Колбэк события **export** может принимать объект со следующими параметрами:

- `format` - формат файла
- `url` - базовый URL для экспорта файла
- `download` - позволяет указать, нужно ли скачать файл после получения ответа от сервера. Если свойство установлено в `false`, файл не будет загружен, но пользователь сможет получить данные в виде blob из объекта события (см. свойство `result` в определении события)
- `fileName` - имя экспортируемого файла

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-15}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "export"
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// экспорт значения в pdf-файл
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
