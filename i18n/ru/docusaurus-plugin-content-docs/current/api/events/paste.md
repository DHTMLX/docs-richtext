---
sidebar_label: paste
title: paste Event
description: Вы можете узнать о событии paste в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# paste

### Description

@short: Срабатывает при вставке содержимого

### Usage

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Example

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "paste" event
editor.api.on("paste", () => {
    console.log("Content was pasted");
});
~~~

**Change log:** Событие добавлено в v2.0
