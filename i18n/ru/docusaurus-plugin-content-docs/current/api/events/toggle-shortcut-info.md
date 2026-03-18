---
sidebar_label: toggle-shortcut-info
title: Событие toggle-shortcut-info
description: Документация по событию toggle-shortcut-info библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# toggle-shortcut-info

### Описание {#description}

@short: Срабатывает при переключении подсказок с сочетаниями клавиш

### Использование {#usage}

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **toggle-shortcut-info** принимает объект со следующим параметром:

- `mode` — управляет отображением подсказок: `true` — показать, `false` — скрыть

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "toggle-shortcut-info"
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// включить подсказки с сочетаниями клавиш
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**История изменений:** Событие добавлено в v2.0
