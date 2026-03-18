---
sidebar_label: toggle-fullscreen-mode
title: Событие toggle-fullscreen-mode
description: Документация по событию toggle-fullscreen-mode библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# toggle-fullscreen-mode

### Описание {#description}

@short: Срабатывает при переключении полноэкранного режима

### Использование {#usage}

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **toggle-fullscreen-mode** принимает объект со следующим параметром:

- `mode` — включает полноэкранный режим

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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
// включить полноэкранный режим
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**История изменений:** Событие добавлено в v2.0
