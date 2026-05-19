---
sidebar_label: api.on()
title: Метод on
description: В документации по JavaScript-библиотеке DHTMLX RichText вы можете найти информацию о методе on. Изучайте руководства разработчика и справочник АПИ, запускайте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.on()

### Описание

@short: Позволяет прикрепить обработчик к внутренним событиям

### Использование

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Параметры

- `event` - (обязательный) событие, которое необходимо обработать
- `handler` - (обязательный) прикрепляемый обработчик (аргументы обработчика зависят от обрабатываемого события)

### События

:::info
Полный список внутренних событий RichText можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// subscribe to the "set-font-size" event
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Журнал изменений:** Метод был обновлён в версии v2.0. Параметр `context` был удалён
