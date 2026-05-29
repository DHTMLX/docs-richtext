---
sidebar_label: outdent
title: outdent Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии outdent. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# outdent

### Описание

@short: Срабатывает при уменьшении отступа блока

### Использование

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Параметры

Колбэк события **outdent** может принимать объект со следующими параметрами:

- `step` - шаг, на который был уменьшен отступ

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
    console.log("The indention was decreased");
});
~~~

**История изменений:** Событие добавлено в v2.0
