---
sidebar_label: export
title: Событие export
description: Документация по событию export библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# export

### Описание {#description}

@short: Срабатывает после нажатия пункта "Export" в menubar или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"export": ({ options: IExportOptions; result?: any }) => boolean | void;

interface IExportOptions {
    format?: "docx" | "pdf";
    url?: string;
    download?: boolean;
    fileName?: string;
}
~~~

### Параметры {#parameters}

Колбэк события **export** принимает объект со следующими параметрами:

- `format` — формат файла
- `url` — базовый URL для экспорта файла
- `download` — определяет, нужно ли скачать файл после получения ответа от сервера. Если `false`, файл не скачивается, но можно получить blob-данные из объекта события (см. свойство `result` в определении события)
- `fileName` — имя экспортируемого файла

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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
// экспорт в PDF
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**История изменений:** Событие добавлено в v2.0
