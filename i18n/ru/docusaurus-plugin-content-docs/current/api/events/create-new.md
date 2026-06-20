---
sidebar_label: create-new
title: Событие create-new
description: Вы можете узнать о событии create-new в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# create-new

### Описание {#description}

@short: Срабатывает при нажатии пункта "New" в строке меню или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события `create-new` может принимать объект со следующим параметром:

- `reset` — сбрасывает историю при создании нового файла

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-10}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "create-new"
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// создание нового файла и сброс истории
editor.api.exec("create-new", { reset: true });
~~~

**История изменений:** Событие добавлено в v2.0
