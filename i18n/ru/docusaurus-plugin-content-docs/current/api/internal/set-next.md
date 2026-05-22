---
sidebar_label: api.setNext()
title: Метод setNext
description: В документации по JavaScript-библиотеке DHTMLX RichText вы можете узнать о методе setNext. Изучайте руководства для разработчиков и справочник АПИ, запускайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.setNext()

### Описание

@short: Позволяет добавить действие в очередь Event Bus

### Использование

~~~jsx {}
api.setNext(next: any): void;
~~~

### Параметры

- `next` - (обязательный) действие, которое будет включено в очередь **Event Bus**  

### Пример

~~~jsx {10-11}
const server = "https://some-backend-url";
// Assume that you have a custom server service class named someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Integrate someServerService into the Event Bus order of widget
    editor.api.setNext(someServerService);
});
~~~

**Журнал изменений:** Метод добавлен в версии v2.0
