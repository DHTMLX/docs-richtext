---
sidebar_label: export
title: событие export
description: В этом разделе рассматривается событие export в библиотеке DHTMLX JavaScript RichText. Включает руководства для разработчиков, справочник API, примеры кода, живые демонстрации и бесплатный 30-дневный пробный период DHTMLX RichText.
---

# export

### Описание

@short: Срабатывает после выбора опции «Export» в меню или вызова через методы Event Bus.

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

Колбэк для события **export** получает объект со следующими свойствами:

- `format` - указывает формат файла
- `url` - базовый URL, используемый для экспорта файла
- `download` - указывает, должен ли файл автоматически скачиваться после ответа сервера. Если установлено в "false", файл не будет скачиваться автоматически, но данные blob можно получить через свойство `result` в объекте события
- `fileName` - имя, присваиваемое экспортируемому файлу

:::info
Внутренними событиями можно управлять с помощью [**методов Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-15}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// прослушивание события "export"
editor.api.on("export", (obj) => {
    console.log(obj);
    console.log("Файл был экспортирован");
});
// экспорт содержимого в формате pdf
editor.api.exec("export", {
    format: "pdf",
    download: false,
    fileName: "some file"
});
~~~

**История изменений:** Это событие было добавлено в версии v2.0
