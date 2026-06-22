---
sidebar_label: setConfig()
title: Метод setConfig
description: В документации библиотеки DHTMLX JavaScript RichText вы можете узнать о методе setConfig. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# setConfig()

### Описание {#description}

@short: Применяет новые параметры конфигурации к RichText

### Использование {#usage}

~~~jsx {}
setConfig(config: { [key:any]: any }): void;
~~~

### Параметры {#parameters}

- `config` - (обязательный) объект параметров конфигурации RichText. Полный список свойств см. [здесь](api/overview/properties_overview.md)

:::note[Примечание]
Метод `setConfig()` сохраняет все ранее заданные параметры, которые не были явно переданы в вызове `setConfig()`.
:::

### Пример {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // другие свойства конфигурации
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**История изменений:** Метод добавлен в v2.0
