---
sidebar_label: insert-list
title: Событие insert-list
description: Вы можете узнать о событии insert-list в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

Колбэк события **insert-list** может принимать объект со следующим параметром:

- `type` - тип вставляемого списка. Можно указать следующие значения:
    - `"bulleted"` - маркированный список
    - `"numbered"` - нумерованный список

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
