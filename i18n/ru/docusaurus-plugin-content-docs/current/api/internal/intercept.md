---
sidebar_label: api.intercept()
title: Метод intercept
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе intercept. Изучите руководства разработчика и справочник АПИ, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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

- `event` - (обязательный) событие, которое нужно перехватить
- `callback` - (обязательный) калбэк, который будет выполнен (аргументы калбэка зависят от перехватываемого события)

### События

:::info
Полный список внутренних событий RichText можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример

~~~jsx {5-10}
// create RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// forbid changing the font size
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**Журнал изменений:** Метод добавлен в v2.0
