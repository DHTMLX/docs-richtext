---
sidebar_label: redo
title: Событие redo
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии redo. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# redo

### Описание {#description}

@short: Срабатывает при нажатии кнопки "Redo" в строке меню/панели инструментов или через методы Event Bus

### Использование {#usage}

~~~jsx {}
"redo": () => boolean | void;
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
// подписка на событие "redo"
editor.api.on("redo", () => {
    console.log("Redo operation was performed");
});
~~~

**История изменений:** Событие добавлено в v2.0
