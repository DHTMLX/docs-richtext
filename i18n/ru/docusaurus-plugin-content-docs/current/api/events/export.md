---
sidebar_label: export
title: Событие export
description: В документации библиотеки DHTMLX JavaScript RichText можно узнать о событии export. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

Колбэк события `export` может принимать объект со следующими параметрами:

- `format` - формат файла
- `url` - базовый URL для экспорта файла
- `download` - позволяет пользователю указать, нужно ли скачать файл после получения ответа от сервера. Если свойство установлено в `false`, файл не будет скачан, однако пользователь сможет получить данные в формате blob из объекта события (см. свойство `result` в определении события)
- `fileName` - имя экспортируемого файла

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
// экспорт значения в файл pdf
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**История изменений:** Событие добавлено в v2.0
