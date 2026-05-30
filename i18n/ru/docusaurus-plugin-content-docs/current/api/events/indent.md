---
sidebar_label: indent
title: indent Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии indent. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# indent

### Описание

@short: Срабатывает при увеличении отступа блока

### Использование

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Параметры

Калбэк события **indent** может принимать объект со следующими параметрами:

- `step` - шаг, на который был увеличен отступ

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "indent"
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
