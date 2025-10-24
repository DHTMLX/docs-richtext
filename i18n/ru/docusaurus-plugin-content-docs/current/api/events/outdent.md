---
sidebar_label: outdent
title: Событие outdent
description: Изучите событие outdent в документации по библиотеке DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками API, примерами кода, живыми демо и скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# outdent

### Описание

@short: Срабатывает при уменьшении отступа блока

### Использование

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Параметры

Объект, передаваемый в callback для события **outdent**, содержит:

- `step` - величина, на которую был уменьшен отступ

:::info
Для работы с внутренними событиями вы можете обратиться к [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "outdent"
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("Отступ был уменьшен");
});
~~~

**Изменения:** Это событие было добавлено в версии v2.0
