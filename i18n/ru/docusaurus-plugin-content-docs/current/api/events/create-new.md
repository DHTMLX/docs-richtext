---
sidebar_label: create-new
title: create-new Event
description: Вы можете узнать о событии create-new в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# create-new

### Описание

@short: Срабатывает при нажатии пункта "New" в строке меню или через методы Event Bus

### Использование

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Параметры

Колбэк события **create-new** может принимать объект со следующим параметром:

- `reset` - сбрасывает историю при создании нового файла

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-10}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "create-new" event
editor.api.on("create-new", ({ reset }) => {
    console.log(`Document has been cleared. History has ${reset ? "" : "not"} been reset.`);
});
// create new file and reset the history
editor.api.exec("create-new", { reset: true });
~~~

**Журнал изменений:** Событие добавлено в v2.0
