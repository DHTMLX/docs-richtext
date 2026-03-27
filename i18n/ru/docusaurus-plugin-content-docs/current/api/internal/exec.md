---
sidebar_label: api.exec()
title: Метод exec
description: Вы можете узнать о методе exec в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.exec()

### Описание {#description}

@short: Позволяет инициировать внутренние события

### Использование {#usage}

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Параметры {#parameters}

- `event` - (обязательный) событие, которое необходимо вызвать
- `config` - (обязательный) объект конфигурации с параметрами (см. вызываемое событие)

### События {#events}

:::info[Информация]
Полный список внутренних событий RichText можно найти [**здесь**](api/overview/events_overview.md)
:::

### Пример {#example}

~~~jsx {5-8}
// initialize RichText
const editor = new richtext.Richtext("#root", {
    // configuration properties
});
// set the text font size
editor.api.exec("set-font-size", {
    fontSize: "16px"
});
~~~

**История изменений:** Метод был добавлен в v2.0
