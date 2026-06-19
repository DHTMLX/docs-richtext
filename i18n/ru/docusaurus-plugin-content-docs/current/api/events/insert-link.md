---
sidebar_label: insert-link
title: Событие insert-link
description: Вы можете узнать о событии insert-link в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# insert-link

### Описание {#description}

@short: Срабатывает при вставке ссылки

### Использование {#usage}

~~~jsx {}
"insert-link": ({ url: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **update-link** может принимать объект со следующим параметром:

- `url` - вставляемый URL

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "insert-link"
editor.api.on("insert-link", (obj) => {
    console.log(obj)
    console.log("The following link was inserted: " + obj.url);
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
