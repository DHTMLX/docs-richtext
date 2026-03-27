---
sidebar_label: copy
title: Событие copy
description: Вы можете узнать о событии copy в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# copy

### Описание {#description}

@short: Срабатывает при копировании выделенного текста

### Использование {#usage}

~~~jsx {}
"copy": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "copy" event
editor.api.on("copy", () => {
    console.log("Selected text was copied");
});
~~~

**История изменений:** Событие добавлено в v2.0
