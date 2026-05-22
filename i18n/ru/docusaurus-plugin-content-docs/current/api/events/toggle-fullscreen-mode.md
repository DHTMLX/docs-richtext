---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии toggle-fullscreen-mode. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# toggle-fullscreen-mode

### Описание

@short: Срабатывает при переключении полноэкранного режима

### Использование

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Параметры

Колбэк события **toggle-fullscreen-mode** может принимать объект со следующим параметром:

- `mode` - включает полноэкранный режим

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-fullscreen-mode" event
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("The full screen mode was changed");
});
// enable the full screen mode
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**Журнал изменений:** Событие добавлено в v2.0
