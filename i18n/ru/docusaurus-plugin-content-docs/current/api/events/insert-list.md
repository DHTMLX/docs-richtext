---
sidebar_label: insert-list
title: insert-list Event
description: Вы можете узнать о событии insert-list в документации JavaScript библиотеки DHTMLX RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

Калбэк события **insert-list** может принимать объект со следующим параметром:

- `type` - тип вставляемого списка. Доступны следующие значения:
    - `"bulleted"` - маркированный список
    - `"numbered"` - нумерованный список

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "insert-list" event
editor.api.on("insert-list", (obj) => {
    console.log(obj.type);
    console.log("The list was inserted");
});
~~~

**Журнал изменений:** Событие добавлено в версии v2.0
