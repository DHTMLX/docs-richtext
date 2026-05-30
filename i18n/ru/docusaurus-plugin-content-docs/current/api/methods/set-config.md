---
sidebar_label: setConfig()
title: Метод setConfig
description: В документации DHTMLX JavaScript RichText вы можете узнать о методе setConfig. Изучайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# setConfig()

### Описание

@short: Применяет новые параметры конфигурации к RichText

### Использование

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### Параметры

- `config` - (обязательный) объект параметров конфигурации RichText. Полный список свойств см. [здесь](api/overview/properties_overview.md)

:::note
Метод `setConfig()` сохраняет все ранее заданные параметры, которые явно не указаны в вызове метода `setConfig()`.
:::

### Пример

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // другие параметры конфигурации
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**История изменений:** Метод добавлен в v2.0
