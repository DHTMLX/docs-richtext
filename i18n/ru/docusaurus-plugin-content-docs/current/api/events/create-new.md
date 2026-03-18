---
sidebar_label: create-new
title: Событие create-new
description: Документация по событию create-new библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# create-new

### Описание {#description}

@short: Срабатывает при нажатии пункта "New" в menubar или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **create-new** принимает объект со следующим параметром:

- `reset` — сбрасывает историю при создании нового файла

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
// создать новый файл и сбросить историю
editor.api.exec("create-new", { reset: true });
~~~

**История изменений:** Событие добавлено в v2.0
