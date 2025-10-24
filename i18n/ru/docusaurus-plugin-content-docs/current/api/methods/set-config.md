---
sidebar_label: setConfig()
title: Метод setConfig
description: Вы можете ознакомиться с методом setConfig в документации библиотеки DHTMLX JavaScript RichText. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX RichText.
---

# setConfig()

### Описание

@short: Обновляет редактор RichText новыми настройками конфигурации.

### Использование

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### Параметры

- `config` - (обязательный) объект, содержащий параметры конфигурации RichText. Полный список свойств доступен [здесь](api/overview/properties_overview.md)

:::note
При использовании метода `setConfig()` любые ранее установленные параметры, которые не включены в новый вызов, останутся без изменений.
:::

### Пример

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // другие свойства конфигурации
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**История изменений:** Метод был введён в версии v2.0
