---
sidebar_label: outdent
title: outdent Event
description: Вы можете узнать о событии outdent в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# outdent

### Описание

@short: Срабатывает при уменьшении отступа блока

### Использование

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Параметры

Калбэк события **outdent** может принимать объект со следующими параметрами:

- `step` - шаг, на который был уменьшен отступ

:::info[Примечание]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "outdent" event
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
