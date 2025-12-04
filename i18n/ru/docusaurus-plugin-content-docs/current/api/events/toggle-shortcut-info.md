---
sidebar_label: toggle-shortcut-info
title: Событие toggle-shortcut-info
description: Вы можете узнать о событии toggle-shortcut-info в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# toggle-shortcut-info

### Описание

@short: Срабатывает при переключении отображения информации о сочетаниях клавиш

### Использование

~~~jsx {}
"toggle-shortcut-info": ({ mode?: boolean }) => boolean | void;
~~~

### Параметры

Колбэк для события **toggle-shortcut-info** получает объект со следующим свойством:

- `mode` - управляет отображением информации о сочетаниях клавиш; `true` - показать всплывающее окно с подсказкой, `false` - скрыть его

:::info
Для управления внутренними событиями вы можете обратиться к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
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
    console.log("Информация о сочетаниях клавиш была показана");
});
// включение отображения информации о сочетаниях клавиш
editor.api.exec("toggle-shortcut-info", { mode: true });
~~~

**Журнал изменений:** Событие было добавлено в версии v2.0
