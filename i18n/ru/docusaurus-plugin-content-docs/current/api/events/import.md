---
sidebar_label: импорт
title: событие import
description: Ознакомьтесь с событием import в документации по библиотеке DHTMLX JavaScript RichText. Изучите руководства для разработчиков, справочник API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# import

### Описание

@short: Срабатывает после выбора опции «Import» в меню или вызова через методы Event Bus.

### Использование

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Параметры

Колбэк для события **import** принимает объект со следующим параметром:

- `html` - строка, содержащая HTML-контент

:::info
Для управления внутренними событиями можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "import"
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("Новое значение было импортировано");
});
// выполнение импорта
editor.api.exec("import", {
    html: "<h2>some value</h2>" // внутренне вызывает setValue
});
~~~

**Журнал изменений:** Это событие было добавлено в версии v2.0
