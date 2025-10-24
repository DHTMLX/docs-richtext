---
sidebar_label: api.setNext()
title: Метод setNext
description: Вы можете узнать о методе setNext в документации по библиотеке DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# api.setNext()

### Описание

@short: Этот метод позволяет добавить действие в последовательность Event Bus.

### Использование

~~~jsx {}
api.setNext(next: any): void;
~~~

### Параметры

- `next` - (обязательный) действие, которое нужно добавить в последовательность **Event Bus**  

### Пример

~~~jsx {10-11}
const server = "https://some-backend-url";
// Предположим, что у вас есть кастомный класс сервиса someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Добавляем someServerService в последовательность Event Bus виджета
    editor.api.setNext(someServerService);
});
~~~

**История изменений:** Метод добавлен в версии v2.0
