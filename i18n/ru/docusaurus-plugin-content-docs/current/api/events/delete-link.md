---
sidebar_label: delete-link
title: Событие delete-link
description: Вы можете узнать о событии delete-link в документации библиотеки DHTMLX JavaScript RichText. Ознакомьтесь с руководствами для разработчиков и справочником API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# delete-link

### Описание

@short: Срабатывает каждый раз при удалении ссылки

### Использование

~~~jsx {}
"delete-link": () => boolean | void;
~~~

:::info
Для управления внутренними событиями вы можете обратиться к [**методам Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-8}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "delete-link"
editor.api.on("delete-link", () => {
    console.log("Ссылка была удалена");
});
~~~

**История изменений:** Это событие было введено в версии 2.0
