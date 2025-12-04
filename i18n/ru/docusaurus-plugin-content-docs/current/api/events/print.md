---
sidebar_label: print
title: Событие print
description: Изучите событие print в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода и живые демо, а также получите бесплатный 30-дневный пробный период DHTMLX RichText.
---

# print

### Описание

@short: Срабатывает при начале печати документа

### Использование

~~~jsx {}
"print": () => boolean | void;
~~~

:::info
Для управления внутренними событиями обратитесь к [**Event Bus methods**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-8}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
// свойства конфигурации
});
// подписка на событие "print"
editor.api.on("print", () => {
    console.log("Документ печатается");
});
~~~

**История изменений:** Событие было добавлено в версии v2.0
