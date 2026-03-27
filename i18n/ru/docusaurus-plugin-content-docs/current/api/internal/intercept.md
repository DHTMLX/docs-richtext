---
sidebar_label: api.intercept()
title: Метод intercept
description: Вы можете узнать о методе intercept в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.intercept()

### Описание {#description}

@short: Позволяет перехватывать и предотвращать внутренние события

### Использование {#usage}

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Параметры {#parameters}

- `event` - (обязательный) событие, которое необходимо вызвать
- `callback` - (обязательный) колбэк, который будет выполнен (аргументы колбэка зависят от вызываемого события)

### События {#events}

:::info[Информация]
Полный список внутренних событий RichText можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример {#example}

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

**История изменений:** Метод был добавлен в v2.0
