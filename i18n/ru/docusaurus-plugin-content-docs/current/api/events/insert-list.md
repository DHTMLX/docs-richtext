---
sidebar_label: insert-list
title: Событие insert-list
description: Документация по событию insert-list библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# insert-list

### Описание {#description}

@short: Срабатывает при вставке списка

### Использование {#usage}

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Параметры {#parameters}

Колбэк события **insert-list** принимает объект со следующим параметром:

- `type` — тип вставляемого списка. Возможные значения:
    - `"bulleted"` — маркированный список
    - `"numbered"` — нумерованный список

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "insert-list"
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**История изменений:** Событие добавлено в v2.0
