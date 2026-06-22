---
sidebar_label: api.intercept()
title: Метод intercept
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе intercept. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.intercept()

### Описание {#description}

@short: Позволяет перехватывать и отменять внутренние события

### Использование {#usage}

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### Параметры {#parameters}

- `event` - (обязательный) событие, которое будет вызвано
- `callback` - (обязательный) калбэк для выполнения (аргументы калбэка зависят от вызываемого события)

### События {#events}

:::info[Информация]
Полный список внутренних событий RichText можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример {#example}

~~~jsx {5-10}
// создать RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// запретить изменение размера шрифта
editor.api.intercept("set-font-size", (obj) => {
    if(obj.fontSize !== "36px" ){
        return false;
    }
});
~~~

**Журнал изменений:** Метод добавлен в v2.0
