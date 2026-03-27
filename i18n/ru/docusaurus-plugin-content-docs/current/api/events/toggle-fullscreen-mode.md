---
sidebar_label: toggle-fullscreen-mode
title: Событие toggle-fullscreen-mode
description: Вы можете узнать о событии toggle-fullscreen-mode в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# toggle-fullscreen-mode

### Описание {#description}

@short: Срабатывает при переключении полноэкранного режима

### Использование {#usage}

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **toggle-fullscreen-mode** может принимать объект со следующим параметром:

- `mode` - включает полноэкранный режим

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
