---
sidebar_label: superscript
title: Событие superscript
description: Документация по событию superscript библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# superscript

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Superscript» в menubar/toolbar или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "superscript"
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// вызвать событие "superscript"
editor.api.exec("superscript", {});
~~~

**История изменений:** Событие добавлено в v2.0
