---
sidebar_label: cut
title: Событие cut
description: Вы можете узнать о событии cut в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# cut

### Описание {#description}

@short: Срабатывает при вырезании выделенного текста

### Использование {#usage}

~~~jsx {}
"cut": () => boolean | void;
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
// subscribe to the "cut" event
editor.api.on("cut", () => {
    console.log("Selected text was cut");
});
~~~

**История изменений:** Событие добавлено в v2.0
