---
sidebar_label: clear-text-format
title: Событие clear-text-format
description: Вы можете узнать о событии clear-text-format в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# clear-text-format

### Описание

@short: Срабатывает каждый раз, когда форматирование текста удаляется с помощью меню, панели инструментов или методов Event Bus.

### Использование

~~~jsx {}
"clear-text-format": () => boolean | void;
~~~

:::info
Для управления внутренними событиями вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-10}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "clear-text-format"
editor.api.on("clear-text-format", () => {
    console.log("Форматирование текста было очищено");
});
// очистка форматирования текста
editor.api.exec("clear-text-format", {});
~~~

**Изменения:** Событие было добавлено в версии v2.0
