---
sidebar_label: api.setNext()
title: Метод setNext
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе setNext. Изучайте руководства для разработчиков и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.setNext()

### Описание {#description}

@short: Позволяет добавить действие в порядок обработки Event Bus

### Использование {#usage}

~~~jsx {}
api.setNext(next: any): void;
~~~

### Параметры {#parameters}

- `next` - (обязательный) действие, которое нужно включить в порядок обработки **Event Bus**  

### Пример {#example}

~~~jsx {10-11}
const server = "https://some-backend-url";
// Предположим, что у вас есть кастомный серверный класс someServerService
const someServerService = new ServerDataService(server);

fetch(server + "/data").then((res) => res.json()).then((data) => {
    const editor = new richtext.Richtext("#root", {
        value: data
    });

    // Встраиваем someServerService в порядок обработки Event Bus виджета
    editor.api.setNext(someServerService);
});
~~~

**История изменений:** Метод добавлен в v2.0
