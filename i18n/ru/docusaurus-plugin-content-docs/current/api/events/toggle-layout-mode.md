---
sidebar_label: toggle-layout-mode
title: toggle-layout-mode Event
description: Вы можете узнать о событии toggle-layout-mode в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# toggle-layout-mode

### Описание

@short: Срабатывает при переключении режима макета

### Использование

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Параметры

Колбэк события **toggle-layout-mode** может принимать объект со следующими параметрами:

- `mode` - режим макета. Доступны следующие режимы: `"classic" | "document"`

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-11}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "toggle-layout-mode"
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("The layout mode was changed");
});
// установка режима макета "document"
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**Журнал изменений:** Событие добавлено в v2.0
