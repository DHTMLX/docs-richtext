---
sidebar_label: paste
title: Событие paste
description: Изучите событие paste в документации библиотеки DHTMLX JavaScript RichText. Получите доступ к руководствам для разработчиков, справочникам по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# paste

### Описание

@short: Срабатывает при вставке содержимого

### Использование

~~~jsx {}
"paste": () => boolean | void;
~~~

:::info
Для управления внутренними событиями обратитесь к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-8}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "paste"
editor.api.on("paste", () => {
    console.log("Содержимое было вставлено");
});
~~~

**Журнал изменений:** Это событие было введено в версии v2.0
