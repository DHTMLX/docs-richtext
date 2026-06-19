---
sidebar_label: api.exec()
title: Метод exec
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе exec. Просматривайте руководства разработчика и справочник по АПИ, изучайте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
// инициализация RichText
const editor = new richtext.Richtext("#root", {
    // свойства конфигурации
});
// установить размер шрифта текста
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**Журнал изменений:** Метод добавлен в v2.0
