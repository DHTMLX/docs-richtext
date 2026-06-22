---
sidebar_label: cut
title: Событие cut
description: Вы можете узнать о событии cut в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "cut"
editor.api.on("cut", () => {
    console.log("Selected text was cut");
});
~~~

**Журнал изменений:** Событие добавлено в v2.0
