---
sidebar_label: show-popup
title: Событие show-popup
description: Вы можете узнать о событии show-popup в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# show-popup

### Описание {#description}

@short: Срабатывает при отображении или скрытии всплывающего окна

### Использование {#usage}

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Параметры {#parameters}

Колбэк события **show-popup** может принимать объект со следующими параметрами:

- `type` - тип всплывающего окна
- `image` - предоставляет доступ к дополнительному контексту (указывает ли текущий курсор на изображение)

:::info[Информация]
Для обработки внутренних событий вы можете использовать [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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

**История изменений:** Событие добавлено в v2.0
