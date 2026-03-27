---
sidebar_label: export
title: Событие export
description: Вы можете узнать о событии export в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# export

### Описание {#description}

@short: Срабатывает после нажатия пункта «Export» в меню или через методы Event Bus

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

Колбэк события **export** может принимать объект со следующими параметрами:

- `format` - формат файла
- `url` - базовый URL для экспорта файла
- `download` - позволяет указать, нужно ли скачивать файл после получения ответа от сервера. Если свойство установлено в `false`, файл не будет загружен, но пользователь сможет получить данные blob из объекта события (см. свойство `result` в определении события)
- `fileName` - имя экспортируемого файла

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-15}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "export" event
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("The file was exported");
});
// export value as pdf file
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**История изменений:** Событие добавлено в v2.0
