---
sidebar_label: toggle-shortcut-info
title: toggle-shortcut-info Event
description: Вы можете узнать о событии toggle-shortcut-info в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# toggle-shortcut-info

### Описание

@short: Срабатывает при переключении информации о горячих клавишах

### Использование

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Параметры

Колбэк события **toggle-shortcut-info** может принимать объект со следующим параметром:

- `mode` - включает информацию о горячих клавишах; `true` — показать всплывающее окно с горячими клавишами, `false` — скрыть всплывающее окно с горячими клавишами

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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
// включить информацию о горячих клавишах
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Журнал изменений:** Событие добавлено в v2.0
