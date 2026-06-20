---
sidebar_label: copy
title: copy Event
description: Вы можете узнать о событии copy в документации библиотеки DHTMLX JavaScript RichText. Изучите руководства разработчика и справочник АПИ, ознакомьтесь с примерами кода и живыми демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# copy

### Описание {#description}

@short: Срабатывает при копировании выделенного текста

### Использование {#usage}

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-8}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "copy"
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**Список изменений:** Событие добавлено в v2.0
