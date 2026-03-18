---
sidebar_label: toggle-layout-mode
title: Событие toggle-layout-mode
description: Документация по событию toggle-layout-mode библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# toggle-layout-mode

### Описание {#description}

@short: Срабатывает при переключении режима отображения

### Использование {#usage}

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **toggle-layout-mode** принимает объект со следующим параметром:

- `mode` — режим отображения. Доступные значения: `"classic" | "document"`

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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
// установить режим отображения "document"
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**История изменений:** Событие добавлено в v2.0
