---
sidebar_label: export
title: Событие export
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии export. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# export

### Описание

@short: Срабатывает после нажатия на опцию "Export" в меню или при вызове через методы Event Bus

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
- `download` - позволяет пользователю указать, нужно ли загружать файл после получения ответа от сервера. Если свойство установлено в "false", файл не будет загружен, но пользователь сможет получить данные в формате blob из объекта события (см. свойство `result` в определении события)
- `fileName` - имя экспортируемого файла

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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
