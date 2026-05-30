---
sidebar_label: import
title: import Event
description: Вы можете узнать о событии import в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# import

### Описание

@short: Срабатывает после нажатия опции «Import» в строке меню или через методы Event Bus

### Использование

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Параметры

Калбэк события **import** может принимать объект со следующим параметром:

- `html` - текстовое значение в формате html

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
    console.log("The new value was imported");
});
// импорт нового значения
editor.api.exec("import", {
    html: "<h2>some value</h2>" // просто вызывает setValue
});
~~~

**Список изменений:** Событие было добавлено в v2.0
