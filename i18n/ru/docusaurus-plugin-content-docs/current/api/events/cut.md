---
sidebar_label: cut
title: Событие cut
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии cut. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# cut

### Описание

@short: Срабатывает при вырезании выделенного текста

### Использование

~~~jsx {}
"cut": () => boolean | void;
~~~

:::info
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

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

**Журнал изменений:** Событие добавлено в v2.0
