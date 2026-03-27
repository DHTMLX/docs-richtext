---
sidebar_label: toggle-shortcut-info
title: Событие toggle-shortcut-info
description: Вы можете узнать о событии toggle-shortcut-info в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# toggle-shortcut-info

### Описание {#description}

@short: Срабатывает при переключении отображения информации о горячих клавишах

### Использование {#usage}

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **toggle-shortcut-info** может принимать объект со следующим параметром:

- `mode` - включает отображение информации о горячих клавишах; `true` — показать всплывающее окно с информацией о горячих клавишах, `false` — скрыть его

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
