---
sidebar_label: import
title: Событие import
description: Вы можете узнать о событии import в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами разработчика и справочником АПИ, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# import

### Описание {#description}

@short: Срабатывает после нажатия опции «Import» в строке меню или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"import": ({ html?: string }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события `import` может принимать объект со следующим параметром:

- `html` - текстовое значение в формате html

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
    html: "<h2>some value</h2>" // simply calls setValue
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
