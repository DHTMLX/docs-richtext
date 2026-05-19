---
sidebar_label: value
title: value Config
description: В документации по JavaScript-библиотеке DHTMLX RichText вы найдёте информацию о конфигурационном параметре value. Изучайте руководства для разработчиков и справочник АПИ, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX RichText.
---

# value

### Описание

@short: Необязательный. Задаёт начальное значение (содержимое), отображаемое в области редактора RichText

:::tip[Совет]
Если вы хотите задать значение (содержимое) в пользовательском формате, используйте встроенный метод [`setValue()`](api/methods/set-value.md).
:::

### Использование

~~~jsx {}
value?: string; 
~~~

### Пример

~~~jsx {2}
new richtext.Richtext("#root", {
    value: "<h1>some value</h1>" // sets the default value (HTML format)
    // other configuration properties
});
~~~

**Журнал изменений:** Свойство добавлено в v2.0

**Связанные статьи:** [Конфигурация](guides/configuration.md)

**Связанный пример:** [RichText. Инициализация](https://snippet.dhtmlx.com/t55alxiy?tag=richtext)
