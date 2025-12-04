---
sidebar_label: create-new
title: Событие create-new
description: Узнайте, как работает событие create-new в библиотеке DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода и живые демо, а также получите бесплатный 30-дневный пробный период DHTMLX RichText.
---

# create-new

### Описание

@short: Это событие вызывается при выборе опции «New» в меню или при использовании методов Event Bus.

### Использование

~~~jsx {}
"create-new": ({ reset?: boolean }) => boolean | void;
~~~

### Параметры

Обработчик события **create-new** принимает объект со следующим свойством:

- `reset` - указывает, нужно ли сбрасывать историю при создании нового файла.

:::info
Для управления внутренними событиями вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md).
:::

### Пример

~~~jsx {5-10}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "create-new"
editor.api.on("create-new", ({ reset }) => {
    console.log(`Документ был очищен. История была ${reset ? "" : "не"} сброшена.`);
});
// создание нового файла и сброс истории
editor.api.exec("create-new", { reset: true });
~~~

**История изменений:** Это событие было добавлено в версии v2.0
