---
sidebar_label: superscript
title: Событие superscript
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии superscript. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# superscript

### Описание {#description}

@short: Срабатывает при нажатии кнопки «Надстрочный» в строке меню/панели инструментов или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"superscript": () => boolean | void;
~~~

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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
