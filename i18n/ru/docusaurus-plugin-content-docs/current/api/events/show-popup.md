---
sidebar_label: show-popup
title: show-popup Event
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о событии show-popup. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# show-popup

### Описание

@short: Срабатывает при показе или скрытии всплывающего окна

### Использование

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Параметры

Калбэк события **show-popup** может принимать объект со следующими параметрами:

- `type` - тип всплывающего окна
- `image` - предоставляет доступ к дополнительному контексту (указывает ли текущий курсор на изображение или нет)

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример

~~~jsx {5-13}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "show-popup" event
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// show-popup the text to the left
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**Журнал изменений:** Событие добавлено в v2.0
