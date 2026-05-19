---
sidebar_label: setConfig()
title: Метод setConfig
description: Вы можете узнать о методе setConfig в документации библиотеки DHTMLX JavaScript RichText. Изучите руководства разработчика и справочник АПИ, ознакомьтесь с примерами кода и живыми демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
Метод `setConfig()` сохраняет все ранее установленные параметры, которые явно не переданы в вызове метода `setConfig()`.
:::

### Пример

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // other configuration properties
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**История изменений:** Метод добавлен в v2.0
