---
sidebar_label: show-popup
title: Событие show-popup
description: Документация по событию show-popup библиотеки DHTMLX RichText. Руководства, справочник API, примеры кода и демо, а также бесплатная 30-дневная пробная версия.
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

Колбэк события **show-popup** принимает объект со следующими параметрами:

- `type` — тип всплывающего окна
- `image` — дополнительный контекст: указывает ли курсор на изображение

:::info[Информация]
Для обработки внутренних событий используйте [**методы Event Bus**](api/overview/event_bus_methods_overview.md)
:::

### Пример {#example}

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
// показать всплывающее окно ссылки
editor.api.exec("show-popup", {
    type: "link"
});
~~~

**История изменений:** Событие добавлено в v2.0
