---
sidebar_label: import
title: Событие import
description: Документация по событию import библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# import

### Описание {#description}

@short: Срабатывает после нажатия пункта "Import" в menubar или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **import** принимает объект со следующим параметром:

- `html` — значение текста в формате HTML

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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
    html: "<h2>some value</h2>" // вызывает setValue
});
~~~

**История изменений:** Событие добавлено в v2.0
