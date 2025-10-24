---
sidebar_label: indent
title: Событие indent
description: Изучите событие indent в документации по библиотеке DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками API, примерами кода, живыми демо и скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# indent

### Описание

@short: Срабатывает при увеличении отступа блока

### Использование

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Параметры

Обработчик события **indent** получает объект с следующим свойством:

- `step` - величина, на которую был увеличен отступ

:::info
Для управления внутренними событиями вы можете обратиться к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "indent"
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("Отступ был увеличен");
});
~~~

**История изменений:** Это событие было добавлено в версии 2.0
