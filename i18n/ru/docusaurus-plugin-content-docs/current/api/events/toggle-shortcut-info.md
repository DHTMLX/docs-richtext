---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии toggle-shortcut-info. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# toggle-shortcut-info

### Описание

@short: Вызывается при переключении панели сочетаний клавиш

### Использование

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Параметры

Калбэк события **toggle-shortcut-info** принимает объект со следующим параметром:

- `mode` — включает панель сочетаний клавиш; `true` — показать всплывающее окно с сочетаниями клавиш, `false` — скрыть его

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "toggle-shortcut-info" event
editor.api.on("toggle-shortcut-info", (obj) => {
    console.log(obj);
    console.log("The shortcut info was shown");
});
// enable the shortcut info
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Журнал изменений:** Событие добавлено в версии v2.0
