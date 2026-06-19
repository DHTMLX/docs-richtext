---
sidebar_label: indent
title: Событие indent
description: Вы можете узнать о событии indent в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# indent

### Описание {#description}

@short: Срабатывает при увеличении отступа блока

### Использование {#usage}

~~~jsx {}
"indent": ({ step: number }) => boolean | void;
~~~

### Параметры {#parameters}

Колбэк события **indent** может принимать объект со следующими параметрами:

- `step` - шаг, на который был увеличен отступ

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "indent"
editor.api.on("indent", (obj) => {
    console.log(obj);
    console.log("The indention was increased");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
