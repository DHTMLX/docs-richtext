---
sidebar_label: superscript
title: superscript Event
description: Вы можете узнать о событии superscript в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# superscript

### Описание

@short: Срабатывает при нажатии кнопки «Надстрочный» на панели меню/инструментов или через методы Event Bus

### Использование

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-9}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "superscript"
editor.api.on("superscript", () => {
    console.log("Superscript was applied");
});
// вызов события "superscript"
editor.api.exec("superscript", {});
~~~

**Журнал изменений:** Событие добавлено в v2.0
