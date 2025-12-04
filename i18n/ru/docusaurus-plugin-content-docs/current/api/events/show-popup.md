---
sidebar_label: show-popup
title: Событие show-popup
description: Изучите событие show-popup в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков, справочниками по API, попробуйте примеры кода, живые демо и скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# show-popup

### Описание

@short: Срабатывает при отображении или скрытии всплывающего окна (popup)

### Использование

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Параметры

Обработчик события **show-popup** получает объект со следующими свойствами:

- `type` - определяет тип всплывающего окна
- `image` - указывает, находится ли текущий курсор над изображением

:::info
Для управления внутренними событиями можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "show-popup"
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("Всплывающее окно было показано/скрыто");
});
// показать всплывающее окно для текста слева
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**Журнал изменений:** Событие было добавлено в версии v2.0
