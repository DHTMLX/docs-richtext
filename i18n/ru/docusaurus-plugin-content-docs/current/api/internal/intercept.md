---
sidebar_label: api.intercept()
title: Метод intercept
description: Вы можете узнать о методе intercept в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# api.intercept()

### Описание

@short: Предоставляет способ перехвата и блокировки внутренних событий до их выполнения.

### Использование

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Параметры

- `event` - (обязательный) имя события для перехвата
- `callback` - (обязательный) функция, которая выполняется при возникновении события (аргументы зависят от конкретного события)

### События

:::info
Полный список внутренних событий RichText вы можете найти [**здесь**](api/overview/events_overview.md)
:::

### Пример

~~~jsx {5-10}
// создаем RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// предотвращаем изменение размера шрифта, кроме "36px"
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**История изменений:** Метод добавлен в версии v2.0
