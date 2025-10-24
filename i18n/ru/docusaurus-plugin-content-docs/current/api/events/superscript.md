---
sidebar_label: надстрочный индекс
title: событие superscript
description: Изучите событие superscript в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочными материалами по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# superscript

### Описание

@short: Это событие срабатывает при нажатии кнопки "Superscript" в меню или панели инструментов, либо при активации через методы Event Bus.

### Использование

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
Для управления внутренними событиями обратитесь к [**Event Bus methods**](api/overview/event_bus_methods_overview.md).
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "superscript"
editor.api.on("superscript", () => {
    console.log("Superscript был применён");
});
// вызов события "superscript"
editor.api.exec("superscript", {});
~~~

**Журнал изменений:** Это событие было введено в версии v2.0
