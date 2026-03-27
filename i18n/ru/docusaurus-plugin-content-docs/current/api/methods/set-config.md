---
sidebar_label: setConfig()
title: Метод setConfig
description: Вы можете узнать о методе setConfig в документации библиотеки DHTMLX JavaScript RichText. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
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
Метод `setConfig()` сохраняет все ранее заданные параметры, которые явно не указаны при вызове метода `setConfig()`.
:::

### Пример {#example}

~~~jsx {6-8}
const editor = new richtext.Richtext("#root", {
    value: "<h1>Some text</h1>",
    // other configuration properties
});

editor.setConfig({
    layoutMode: "document"
});
~~~

**История изменений:** Метод был добавлен в v2.0
