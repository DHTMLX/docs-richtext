---
sidebar_label: insert-list
title: Событие insert-list
description: В документации DHTMLX JavaScript RichText вы можете узнать о событии insert-list. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

Калбэк события `insert-list` может принимать объект со следующим параметром:

- `type` - тип вставляемого списка. Возможные значения:
    - `"bulleted"` - маркированный список
    - `"numbered"` - нумерованный список

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
