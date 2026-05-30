---
sidebar_label: insert-list
title: insert-list Event
description: В документации DHTMLX JavaScript RichText вы можете узнать о событии insert-list. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

Колбэк события **insert-list** может принимать объект со следующим параметром:

- `type` - тип вставляемого списка. Допустимые значения:
    - `"bulleted"` - маркированный список
    - `"numbered"` - нумерованный список

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // параметры конфигурации
});
// подписка на событие "insert-list"
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
