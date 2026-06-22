---
sidebar_label: api.on()
title: Метод on
description: Вы можете узнать о методе on в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.on()

### Описание {#description}

@short: Позволяет прикрепить обработчик к внутренним событиям

### Использование {#usage}

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### Параметры {#parameters}

- `event` - (обязательный) событие, которое нужно отслеживать
- `handler` - (обязательный) обработчик для прикрепления (аргументы обработчика зависят от отслеживаемого события)

### События {#events}

:::info[Информация]
Полный список внутренних событий RichText можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример {#example}

~~~jsx {5-8}
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// подписка на событие "set-font-size"
editor.api.on("set-font-size", (obj) => {
    console.log(obj.fontSize);
});
~~~

**Журнал изменений:** Метод был обновлён в v2.0. Параметр `context` был удалён
