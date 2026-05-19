---
sidebar_label: api.exec()
title: Метод exec
description: В документации по JavaScript-библиотеке DHTMLX RichText вы можете узнать о методе exec. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# api.exec()

### Описание

@short: Позволяет инициировать внутренние события

### Использование

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### Параметры

- `event` - (обязательный) событие, которое необходимо вызвать
- `config` - (обязательный) объект конфигурации с параметрами (см. описание вызываемого события)

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
// set the text font size
editor.api.exec("set-font-size", {
    fontSize: "16px"
}); 
~~~

**Журнал изменений:** Метод добавлен в v2.0
