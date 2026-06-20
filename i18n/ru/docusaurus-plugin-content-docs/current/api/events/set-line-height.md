---
sidebar_label: set-line-height
title: set-line-height Event
description: Вы можете узнать о событии set-line-height в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-line-height

### Описание {#description}

@short: Срабатывает при установке межстрочного интервала

### Использование {#usage}

~~~jsx {}
"set-line-height": ({ lineHeight: string }) => boolean | void;
~~~

### Параметры {#parameters}

Коллбэк события `set-line-height` может принимать объект со следующим параметром:

- `lineHeight` - межстрочный интервал

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-line-height"
editor.api.on("set-line-height", (obj) => {
    console.log(obj);
    console.log("The line height was changed");
});
// применить новый межстрочный интервал
editor.api.exec("set-line-height", {
   lineHeight: "15px"
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
