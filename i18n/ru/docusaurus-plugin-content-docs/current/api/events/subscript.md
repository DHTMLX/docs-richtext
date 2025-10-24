---
sidebar_label: subscript
title: Событие subscript
description: Изучите событие subscript в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# subscript

### Описание

@short: Срабатывает при нажатии кнопки "Subscript" в менюбара/тулбаре или при вызове через методы Event Bus

### Использование

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info
Для работы с внутренними событиями вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-10}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "subscript"
editor.api.on("subscript", () => {
    console.log("Подстрочный текст был применён");
});
// выполнение события "subscript"
editor.api.exec("subscript", {});
~~~

**История изменений:** Это событие было добавлено в версии v2.0
