---
sidebar_label: toggle-layout-mode
title: Событие toggle-layout-mode
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии toggle-layout-mode. Руководства разработчика и справочник по АПИ, примеры кода и живые демо, а также бесплатная 30-дневная ознакомительная версия DHTMLX RichText.
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
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
// установка режима разметки "document"
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**История изменений:** Событие добавлено в v2.0
