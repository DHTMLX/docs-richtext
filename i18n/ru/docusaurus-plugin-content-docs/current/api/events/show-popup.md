---
sidebar_label: show-popup
title: show-popup Event
description: Вы можете узнать о событии show-popup в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# show-popup

### Описание

@short: Срабатывает при отображении или скрытии всплывающего окна

### Использование

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Параметры

Колбэк события **show-popup** может принимать объект со следующими параметрами:

- `type` - тип всплывающего окна
- `image` - предоставляет доступ к дополнительному контексту (указывает ли текущий курсор на изображение или нет)

:::info
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
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
    console.log("The popup was shown/hidden");
});
// show-popup the text to the left
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**История изменений:** Событие добавлено в v2.0
