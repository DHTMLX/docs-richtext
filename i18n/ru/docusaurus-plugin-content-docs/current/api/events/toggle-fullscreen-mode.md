---
sidebar_label: toggle-fullscreen-mode
title: toggle-fullscreen-mode Event
description: Узнайте о событии toggle-fullscreen-mode в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

:::info
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "toggle-fullscreen-mode"
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("The full screen mode was changed");
});
// включение полноэкранного режима
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**Лог изменений:** Событие добавлено в v2.0
