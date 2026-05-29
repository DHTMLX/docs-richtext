---
sidebar_label: api.intercept()
title: Метод intercept
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе intercept. Изучайте руководства разработчика и справочник АПИ, смотрите примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.intercept()

### Описание

@short: Позволяет перехватывать и отменять внутренние события

### Использование

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Параметры

- `event` - (обязательный) событие, которое необходимо отслеживать
- `callback` - (обязательный) калбэк-функция, выполняемая при возникновении события (аргументы калбэка зависят от конкретного события)

### События

:::info
Полный список внутренних событий RichText можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример

~~~jsx {5-10}
// создание RichText
const editor = new richtext.Richtext("#root", {
    // параметры конфигурации
});
// запретить изменение размера шрифта
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**История изменений:** Метод добавлен в v2.0
