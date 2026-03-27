---
sidebar_label: api.setNext()
title: Метод setNext
description: Вы можете узнать о методе setNext в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.setNext()

### Описание {#description}

@short: Позволяет добавлять действие в очередь Event Bus

### Использование {#usage}

~~~jsx {}
api.setNext(next: any): void;
~~~

### Параметры {#parameters}

- `next` - (обязательный) действие, которое необходимо включить в очередь **Event Bus**

### Пример {#example}

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

**История изменений:** Метод был добавлен в v2.0
