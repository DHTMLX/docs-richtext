---
sidebar_label: subscript
title: subscript Событие
description: Вы можете узнать о событии subscript в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# subscript

### Описание {#description}

@short: Вызывается при нажатии кнопки «Subscript» в строке меню/панели инструментов или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"subscript": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-10}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "subscript"
editor.api.on("subscript", () => {
    console.log("Subscript was applied");
});
// вызов события "subscript"
editor.api.exec("subscript", {});
~~~

**История изменений:** Событие добавлено в v2.0
