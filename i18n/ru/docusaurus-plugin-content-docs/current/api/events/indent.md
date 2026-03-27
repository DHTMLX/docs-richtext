---
sidebar_label: indent
title: Событие indent
description: Вы можете узнать о событии indent в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# indent

### Описание {#description}

@short: Срабатывает при увеличении отступа блока

### Использование {#usage}

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **indent** может принимать объект со следующим параметром:

- `step` - шаг, на который был увеличен отступ

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "indent" event
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**История изменений:** Событие добавлено в v2.0
