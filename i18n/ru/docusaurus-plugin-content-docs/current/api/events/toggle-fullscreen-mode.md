---
sidebar_label: переключение-режима-полноэкранного-режима
title: Событие toggle-fullscreen-mode
description: Вы можете узнать о событии toggle-fullscreen-mode в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# toggle-fullscreen-mode

### Описание

@short: Срабатывает при переключении полноэкранного режима включения или отключения

### Использование

~~~jsx {}
"toggle-fullscreen-mode": ({ mode?: boolean }) => boolean | void;
~~~

### Параметры

Обработчик события **toggle-fullscreen-mode** принимает объект со следующим свойством:

- `mode` - указывает, включён ли полноэкранный режим

:::info
Для управления внутренними событиями вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "toggle-fullscreen-mode"
editor.api.on("toggle-fullscreen-mode", (obj) => {
    console.log(obj);
    console.log("Полноэкранный режим был изменён");
});
// включение полноэкранного режима
editor.api.exec("toggle-fullscreen-mode", { mode: true });
~~~

**Журнал изменений:** Событие было добавлено в версии v2.0
