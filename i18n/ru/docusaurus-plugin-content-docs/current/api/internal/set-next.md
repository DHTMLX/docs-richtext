---
sidebar_label: api.setNext()
title: Метод setNext
description: Вы можете узнать о методе setNext в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник АПИ, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
// Предположим, что у вас есть пользовательский класс серверного сервиса someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Встроить someServerService в очередь Event Bus виджета
    editor.api.setNext(someServerService);
});
~~~

**Журнал изменений:** Метод был добавлен в v2.0
