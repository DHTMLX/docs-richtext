---
sidebar_label: set-font-size
title: set-font-size Event
description: Вы можете узнать о событии set-font-size в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# set-font-size

### Описание

@short: Срабатывает при установке размера шрифта

### Использование

~~~jsx {}
"set-font-size": ({ fontSize: string }) => boolean | void;
~~~

### Параметры

Калбэк события **set-font-size** может принимать объект со следующим параметром:

- `fontSize` - размер шрифта, который будет применён

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-font-size"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
    console.log("The font size was changed");
});
// применение нового размера шрифта
editor.api.exec("set-font-size", {
    fontSize: "11px"
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
