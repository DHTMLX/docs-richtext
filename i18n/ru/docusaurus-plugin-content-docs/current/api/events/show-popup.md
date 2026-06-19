---
sidebar_label: show-popup
title: Событие show-popup
description: В документации DHTMLX JavaScript RichText вы можете узнать о событии show-popup. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# show-popup

### Описание {#description}

@short: Срабатывает при показе или скрытии всплывающего окна

### Использование {#usage}

~~~jsx {}
"show-popup": (IPopupConfig) => boolean | void;

interface IPopupConfig {
    type: "link" | null;
    image?: boolean;
}
~~~

### Параметры {#parameters}

Калбэк события **show-popup** может принимать объект со следующими параметрами:

- `type` - тип всплывающего окна
- `image` - предоставляет доступ к дополнительному контексту (указывает ли курсор на изображение или нет)

:::info[Информация]
Для обработки внутренних событий можно использовать [**методы шины событий**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

~~~jsx {5-13}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // параметры конфигурации
});
// подписка на событие "show-popup"
editor.api.on("show-popup", (obj) => {
    console.log(obj);
    console.log("The popup was shown/hidden");
});
// показать всплывающее окно для ссылки
editor.api.exec("show-popup", {
    type: "link"
}); 
~~~

**История изменений:** Событие добавлено в v2.0
