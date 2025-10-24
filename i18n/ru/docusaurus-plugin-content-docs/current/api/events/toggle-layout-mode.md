---
sidebar_label: переключение-режима-раскладки
title: Событие toggle-layout-mode
description: Вы можете узнать о событии toggle-layout-mode в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# toggle-layout-mode

### Описание

@short: Срабатывает при переключении режима раскладки

### Использование

~~~jsx {}
"toggle-layout-mode": ({ mode?: "classic" | "document" }) => boolean | void;
~~~

### Параметры

Обработчик события **toggle-layout-mode** получает объект с такими параметрами:

- `mode` - указывает режим раскладки. Доступные варианты: `"classic" | "document"`

:::info
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-11}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "toggle-layout-mode"
editor.api.on("toggle-layout-mode", (obj) => {
    console.log(obj);
    console.log("Режим раскладки изменён");
});
// установка режима раскладки "document"
editor.api.exec("toggle-layout-mode", { mode: "document" });
~~~

**Журнал изменений:** Событие было добавлено в версии v2.0
