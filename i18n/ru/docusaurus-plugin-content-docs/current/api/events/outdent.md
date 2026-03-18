---
sidebar_label: outdent
title: Событие outdent
description: Документация по событию outdent библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
---

# outdent

### Описание {#description}

@short: Срабатывает при уменьшении отступа блока

### Использование {#usage}

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **outdent** принимает объект со следующим параметром:

- `step` — шаг, на который уменьшен отступ

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "outdent"
editor.api.on("outdent", (obj) => {
    console.log(obj);
    console.log("The indention was decreased");
});
~~~

**История изменений:** Событие добавлено в v2.0
