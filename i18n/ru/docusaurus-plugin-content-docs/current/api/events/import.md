---
sidebar_label: import
title: Событие import
description: Вы можете узнать о событии import в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# import

### Описание {#description}

@short: Срабатывает после нажатия пункта «Import» в меню или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **import** может принимать объект со следующим параметром:

- `html` - текстовое значение в формате HTML

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "import" event
editor.api.on("import", (obj) => {
    console.log(obj.html);
    console.log("The new value was imported");
});
// import new value
editor.api.exec("import", {
    html: "<h2>some value</h2>" // simply calls setValue
});
~~~

**История изменений:** Событие добавлено в v2.0
