---
sidebar_label: insert-list
title: Событие insert-list
description: Изучите событие insert-list в документации по библиотеке DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками API, попробуйте примеры кода и живые демо, а также получите бесплатный 30-дневный пробный период DHTMLX RichText.
---

# insert-list

### Описание

@short: Срабатывает при вставке списка

### Использование

~~~jsx {}
"insert-list": ({ type: TListType }) => boolean | void;

type TListType = "bulleted" | "numbered";
~~~

### Параметры

Обработчик события **insert-list** получает объект с следующим параметром:

- `type` - указывает тип вставленного списка. Возможные значения:
    - `"bulleted"` - маркированный список
    - `"numbered"` - нумерованный список

:::info
Для управления внутренними событиями вы можете обратиться к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "insert-list"
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("Список был вставлен");
});
~~~

**История изменений:** Это событие было добавлено в версии 2.0
