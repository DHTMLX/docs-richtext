---
sidebar_label: toggle-layout-mode
title: Событие toggle-layout-mode
description: Вы можете узнать о событии toggle-layout-mode в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# toggle-layout-mode

### Описание {#description}

@short: Срабатывает при переключении режима разметки

### Использование {#usage}

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **toggle-layout-mode** может принимать объект со следующими параметрами:

- `mode` - режим разметки. Доступны следующие режимы: `"classic" | "document"`

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-11}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-layout-mode" event
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("The layout mode was changed");
});
// set the "document" layout mode
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**История изменений:** Событие добавлено в v2.0
