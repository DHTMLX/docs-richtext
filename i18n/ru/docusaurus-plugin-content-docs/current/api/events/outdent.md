---
sidebar_label: outdent
title: Событие outdent
description: Вы можете узнать о событии outdent в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# outdent

### Описание {#description}

@short: Срабатывает при уменьшении отступа блока

### Использование {#usage}

~~~jsx {}
"outdent": ({ step: number }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события `outdent` может принимать объект со следующим параметром:

- `step` - шаг, на который был уменьшен отступ

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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

**Журнал изменений:** Событие добавлено в v2.0
